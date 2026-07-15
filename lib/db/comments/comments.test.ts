import { beforeEach, describe, expect, it, vi } from "vitest";
import { COMMENTS_TABLE_NAME, insertComment } from "@/lib/db/comments/comments";
import { getSupabase } from "@/lib/db/supabase";

vi.mock("@/lib/db/supabase", () => ({
  getSupabase: vi.fn(),
}));

describe("insertContact", () => {
  const getSupabaseMock = vi.mocked(getSupabase);
  const fromMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    getSupabaseMock.mockReturnValue({ from: fromMock } as never);
  });

  it("inserts into contacts table and returns row id", async () => {
    const singleMock = vi.fn().mockResolvedValue({
      data: { id: "abc-123" },
      error: null,
    });
    const selectMock = vi.fn().mockReturnValue({ single: singleMock });
    const insertMock = vi.fn().mockReturnValue({ select: selectMock });

    fromMock.mockReturnValue({ insert: insertMock } as never);

    await expect(insertComment("hello")).resolves.toEqual({ id: "abc-123" });
    expect(getSupabaseMock).toHaveBeenCalled();
    expect(fromMock).toHaveBeenCalledWith(COMMENTS_TABLE_NAME);
    expect(insertMock).toHaveBeenCalledWith({ message: "hello" });
    expect(selectMock).toHaveBeenCalledWith("id");
    expect(singleMock).toHaveBeenCalled();
  });

  it("throws safe error when supabase insert fails", async () => {
    const singleMock = vi.fn().mockResolvedValue({
      data: null,
      error: { message: "db failure" },
    });
    const selectMock = vi.fn().mockReturnValue({ single: singleMock });
    const insertMock = vi.fn().mockReturnValue({ select: selectMock });

    fromMock.mockReturnValue({ insert: insertMock } as never);

    await expect(insertComment("hello")).rejects.toThrow(
      "Unable to save feedback.",
    );
  });
});
