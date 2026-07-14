"use client";

import { useEffect } from "react";

export type ToastVariant = "success" | "error" | "info";

interface ToastProps {
  message: string;
  variant?: ToastVariant;
  open: boolean;
  durationMs?: number;
  onClose: () => void;
}

const variantClasses: Record<ToastVariant, string> = {
  success: "border-amber-400 bg-amber-50 text-amber-950",
  error: "border-red-400 bg-red-50 text-red-900",
  info: "border-stone-300 bg-white text-stone-800",
};

export const Toast = ({
  message,
  variant = "info",
  open,
  durationMs = 3500,
  onClose,
}: ToastProps) => {
  useEffect(() => {
    if (!open) return;

    const timeoutId = window.setTimeout(onClose, durationMs);
    return () => window.clearTimeout(timeoutId);
  }, [open, durationMs, onClose, message]);

  if (!open) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 left-1/2 z-50 w-[min(92vw,24rem)] -translate-x-1/2 rounded-md border px-4 py-3 text-sm shadow-md ${variantClasses[variant]}`}
    >
      <div className="flex items-start justify-between gap-3">
        <p>{message}</p>
        <button
          type="button"
          onClick={onClose}
          className="shrink-0 text-xs font-medium underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
          aria-label="Dismiss notification"
        >
          x
        </button>
      </div>
    </div>
  );
};
