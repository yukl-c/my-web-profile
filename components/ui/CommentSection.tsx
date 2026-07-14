"use client";

import { FormEvent, useEffect, useState } from "react";
import type { ToastVariant } from "@/components/ui/Toast";

const COOLDOWN_SECONDS = 30;

export interface CommentSubmitStatus {
  message: string;
  variant: ToastVariant;
}

interface CommentSectionProps {
  onStatus?: (status: CommentSubmitStatus) => void;
}

export const CommentSection = ({ onStatus }: CommentSectionProps) => {
  const [message, setMessage] = useState("");
  const [cooldownRemaining, setCooldownRemaining] = useState(0);

  useEffect(() => {
    if (cooldownRemaining <= 0) return;

    const intervalId = window.setInterval(() => {
      setCooldownRemaining((seconds) => Math.max(0, seconds - 1));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [cooldownRemaining]);

  const isCoolingDown = cooldownRemaining > 0;
  const trimmedMessage = message.trim();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isCoolingDown) {
      onStatus?.({
        message: `Please wait ${cooldownRemaining}s before sending another comment.`,
        variant: "info",
      });
      return;
    }

    if (!trimmedMessage) {
      onStatus?.({
        message: "Please enter a message before submitting.",
        variant: "error",
      });
      return;
    }

    // Frontend-only for now — API wiring comes later via POST /api/feedback.
    setMessage("");
    setCooldownRemaining(COOLDOWN_SECONDS);
    onStatus?.({
      message: "Comment ready to send. Backend submit comes in Phase 3.",
      variant: "success",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full" noValidate>
      <label htmlFor="comment" className="sr-only">
        Comment
      </label>
      <textarea
        id="comment"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Write your message..."
        aria-invalid={message.length > 0 && trimmedMessage.length === 0}
        className="h-36 w-full resize-none rounded-md border border-amber-300 bg-white p-3 text-sm text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
      />

      <div className="mt-3 flex flex-col items-center gap-2">
        <button
          type="submit"
          disabled={isCoolingDown}
          className="h-9 rounded-md bg-amber-400 px-5 text-sm font-medium text-amber-950 transition-colors hover:bg-amber-200 disabled:cursor-not-allowed disabled:bg-amber-200/60 disabled:text-amber-900/50"
        >
          {isCoolingDown ? `Wait` : "Submit"}
        </button>
        {isCoolingDown ? (
          <p className="text-center text-xs text-stone-600">
            You can submit again in {cooldownRemaining}s.
          </p>
        ) : null}
      </div>
    </form>
  );
};
