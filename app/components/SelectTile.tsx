"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

function SelectTile() {
  const contactType = ["CONTACT", "BOOKING", "SUPPORT"];
  const [message, setMessage] = useState("");

  function handleMessageTypeChange(e: any) {
    const packageName = e.target.value;
    setMessage(packageName);
  }

  return (
    <div className="flex w-full flex-wrap items-center">
      {contactType.map((cat, i) => (
        <label
          key={i}
          className={cn(
            buttonVariants({ variant: "outline" }),
            message === cat
              ? "border-black bg-white dark:border-gray-800 dark:bg-gray-700"
              : "text-gray-500",
            "mr-2 cursor-pointer text-center text-xs font-semibold"
          )}
        >
          {/* //this input is hidden cos there is no appearance for it */}
          <input
            type="radio"
            name="messageType"
            value={cat}
            checked={message === cat}
            onChange={handleMessageTypeChange}
            className="absolute -left-[999px] appearance-none"
          />
          <span data-text={cat} className="text-xs">
            {cat}
          </span>
        </label>
      ))}
    </div>
  );
}

export default SelectTile;
