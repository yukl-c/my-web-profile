import { z } from "zod";
import { MAX_FEEDBACK_MESSAGE_LENGTH } from "@/lib/constants/feedback";

export const feedbackBodySchema = z.object({
  message: z
    .string()
    .trim()
    .min(1, "Please enter a message before submitting.")
    .max(
      MAX_FEEDBACK_MESSAGE_LENGTH,
      `Please enter a message less than ${MAX_FEEDBACK_MESSAGE_LENGTH} characters before submitting.`,
    ),
  website: z.string().trim().max(0).optional(),
});

export type FeedbackBody = z.infer<typeof feedbackBodySchema>;
