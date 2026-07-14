import { NextResponse } from "next/server";
import { insertContact } from "@/lib/db/contacts";
import { feedbackBodySchema } from "@/lib/validations/feedback";

const INVALID_MESSAGE_ERROR = "Please enter a valid message before submitting.";

const hasFilledHoneyPot = (body: unknown) => {
  if (typeof body !== "object" || body === null) {
    return false;
  }

  const website = (body as { website?: unknown }).website;
  return typeof website === "string" && website.trim().length > 0;
};

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: INVALID_MESSAGE_ERROR }, { status: 400 });
  }

  if (hasFilledHoneyPot(body)) {
    return NextResponse.json({ error: INVALID_MESSAGE_ERROR }, { status: 400 });
  }

  const parsed = feedbackBodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: INVALID_MESSAGE_ERROR }, { status: 400 });
  }

  try {
    await insertContact(parsed.data.message);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Unable to save feedback." },
      { status: 500 },
    );
  }
}
