import { beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "@/app/api/feedback/route";
import { insertContact } from "@/lib/db/contacts";

vi.mock("@/lib/db/contacts", () => ({
  insertContact: vi.fn(),
}));

describe("POST /api/feedback", () => {
  const insertContactMock = vi.mocked(insertContact);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns 200 for valid payload", async () => {
    insertContactMock.mockResolvedValue({ id: "row-1" });

    const request = new Request("http://localhost/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Looks great", website: "" }),
    });

    const response = await POST(request);
    const body = (await response.json()) as { success?: boolean };

    expect(response.status).toBe(200);
    expect(body.success).toBe(true);
    expect(insertContactMock).toHaveBeenCalledWith("Looks great");
  });

  it("returns 400 when payload is invalid", async () => {
    const request = new Request("http://localhost/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "   " }),
    });

    const response = await POST(request);
    const body = (await response.json()) as { error?: string };

    expect(response.status).toBe(400);
    expect(body.error).toBeDefined();
    expect(insertContactMock).not.toHaveBeenCalled();
  });

  it("returns 400 when json parsing fails", async () => {
    const request = new Request("http://localhost/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "{invalid-json",
    });

    const response = await POST(request);

    expect(response.status).toBe(400);
    expect(insertContactMock).not.toHaveBeenCalled();
  });

  it("returns 400 when honeypot field is filled", async () => {
    const request = new Request("http://localhost/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: "Hello",
        website: "https://spam.invalid",
      }),
    });

    const response = await POST(request);

    expect(response.status).toBe(400);
    expect(insertContactMock).not.toHaveBeenCalled();
  });

  it("returns 500 when insert throws", async () => {
    insertContactMock.mockRejectedValue(new Error("db unavailable"));

    const request = new Request("http://localhost/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Persist this", website: "" }),
    });

    const response = await POST(request);
    const body = (await response.json()) as { error?: string };

    expect(response.status).toBe(500);
    expect(body.error).toBe("Unable to save feedback.");
  });
});
