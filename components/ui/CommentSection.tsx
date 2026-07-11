"use client";

import { FormEvent, useState } from "react";

export const CommentSection = () => {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <label htmlFor="comment" className="sr-only">
        Comment
      </label>
      <textarea
        id="comment"
        value={message}
        onChange={(event) => {
          setMessage(event.target.value);
          setSubmitted(false);
        }}
        placeholder="Write your message..."
        className="h-36 w-full resize-none rounded-md border border-amber-300 bg-white p-3 text-sm text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
      />

      <div className="mt-3 flex justify-center">
        <button
          type="submit"
          className="h-9 rounded-md bg-amber-400 px-5 text-sm font-medium text-amber-950 transition-colors hover:bg-amber-200"
        >
          Submit
        </button>
      </div>

      {submitted ? (
        <p className="mt-2 text-center text-xs text-amber-900">
          This is a UI preview. Backend submit comes in Phase 3.
        </p>
      ) : null}
    </form>
  );
};
