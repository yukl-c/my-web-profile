"use client";

import { FormEvent, useEffect, useState } from "react";
import type { ToastVariant } from "@/components/ui/Toast";
import { MAX_FEEDBACK_MESSAGE_LENGTH } from "@/lib/constants/feedback";

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
  const [website, setWebsite] = useState("");
  const [cooldownRemaining, setCooldownRemaining] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (cooldownRemaining <= 0) return;

    const intervalId = window.setInterval(() => {
      setCooldownRemaining((seconds) => Math.max(0, seconds - 1));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [cooldownRemaining]);

  const isCoolingDown = cooldownRemaining > 0;
  const trimmedMessage = message.trim();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
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

    if (trimmedMessage.length > MAX_FEEDBACK_MESSAGE_LENGTH) {
      onStatus?.({
        message: `Please enter a message less than ${MAX_FEEDBACK_MESSAGE_LENGTH} characters before submitting.`,
        variant: "error",
      });
      return;
    }

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: trimmedMessage, website }),
      });

      if (response.ok) {
        setMessage("");
        setWebsite("");
        setCooldownRemaining(COOLDOWN_SECONDS);
        onStatus?.({
          message: "Thanks! Your message has been sent successfully.",
          variant: "success",
        });
        return;
      }

      const result = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;

      onStatus?.({
        message: result?.error ?? "Unable to submit your message. Please try again.",
        variant: "error",
      });
    } catch {
      onStatus?.({
        message: "Unable to submit your message. Please try again.",
        variant: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
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
      <label htmlFor="website" className="sr-only">
        Website
      </label>
      <input
        id="website"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={website}
        onChange={(event) => setWebsite(event.target.value)}
        aria-hidden
        className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
      />

      <div className="mt-3 flex flex-col items-center gap-2">
        <button
          type="submit"
          disabled={isCoolingDown || isSubmitting}
          className="h-9 rounded-md bg-amber-400 px-5 text-sm font-medium text-amber-950 transition-colors hover:bg-amber-200 disabled:cursor-not-allowed disabled:bg-amber-200/60 disabled:text-amber-900/50"
        >
          {isSubmitting ? "Submitting..." : isCoolingDown ? "Wait" : "Submit"}
        </button>
        {isCoolingDown ? (
          <p className="text-center text-xs text-stone-600">
            You can submit again in {cooldownRemaining}s.
          </p>
        ) : null}
        {/* Disable textarea while submitting */}
        <style jsx>{`
          textarea#comment {
            pointer-events: ${isSubmitting ? "none" : "auto"};
            opacity: ${isSubmitting ? 0.6 : 1};
          }
        `}</style>
   
      </div>
    </form>
  );
};
