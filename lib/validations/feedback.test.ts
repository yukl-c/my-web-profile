import { describe, expect, it } from "vitest";
import {
  feedbackBodySchema,
  type FeedbackBody,
} from "@/lib/validations/feedback";
import { MAX_FEEDBACK_MESSAGE_LENGTH } from "@/lib/constants/feedback";

describe("feedbackBodySchema", () => {
  it("accepts a valid message payload", () => {
    const payload: FeedbackBody = {
      message: "Thanks for sharing your profile.",
      website: "",
    };

    const result = feedbackBodySchema.safeParse(payload);
    expect(result.success).toBe(true);
  });

  it("rejects empty or whitespace-only messages", () => {
    const emptyMessageResult = feedbackBodySchema.safeParse({ message: "" });
    const whitespaceResult = feedbackBodySchema.safeParse({ message: "   " });

    expect(emptyMessageResult.success).toBe(false);
    expect(whitespaceResult.success).toBe(false);
  });

  it("rejects messages longer than max length", () => {
    const tooLongMessage = "a".repeat(MAX_FEEDBACK_MESSAGE_LENGTH + 1);
    const result = feedbackBodySchema.safeParse({ message: tooLongMessage });

    expect(result.success).toBe(false);
  });

  it("rejects honeypot payloads with website value", () => {
    const result = feedbackBodySchema.safeParse({
      message: "Legit message",
      website: "https://bot.example",
    });

    expect(result.success).toBe(false);
  });
});
