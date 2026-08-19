"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-lg bg-red-600 px-4 py-3 font-semibold
                       hover:bg-red-500 disabled:opacity-50"
    >
      {pending ? "Testing..." : "Test Device"}
    </button>
  );
}
