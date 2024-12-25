"use client";

import Form from "next/form";
import { useActionState } from "react";
import { sendDiscordMessage } from "../actions";
import { useEffect } from "react"
import { toast } from "sonner";

const MessageForm = () => {
  const [formState, formAction, isPending] = useActionState(
    sendDiscordMessage,
    null
  );

  useEffect (() => {
    if (formState?.success) {
      toast.success(formState?.message);
    } else if (formState?.success === false) {
      toast.error(formState?.message);
    }
  },[formState?.success])

  

  return (
    <Form className="flex flex-col items-center" action={formAction}>
      <input
        type="text"
        placeholder="Your name"
        name="username"
        className="border p-1 rounded w-[300px] my-2"
        required
      />

      <input
        type="email"
        placeholder="Your e-mail"
        name="email"
        className="border p-1 rounded w-[300px] my-2"
        required
      />

      <input
        type="text"
        placeholder="Your Image Url"
        name="dp"
        className="border p-1 rounded w-[300px] my-2"
      />

      <select
        name="type"
        className="p-1 rounded border my-2 w-[300px]"
        required
      >
        <option value="">Message Type</option>
        <option value="thanks">Say, Thanks!</option>
        <option value="qa">QA</option>
        <option value="general">General</option>
      </select>

      <textarea
        placeholder="What do you want to say?"
        name="message"
        className="border p-1 rounded w-[300px] my-2"
        required
      />

      <button
        type="submit"
        className="bg-blue-500 w-[70px] text-white rounded-md"
      >
        {isPending ? "Sending..." : "Send"}
      </button>
    </Form>
  );
};

export default MessageForm;
