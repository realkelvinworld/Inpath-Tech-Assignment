"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { CareerType } from "./db";
import Link from "next/link";

function SelectCareer() {
  const [message, setMessage] = useState("");

  function handleMessageTypeChange(e: any) {
    const packageName = e.target.value;
    setMessage(packageName);
  }

  return (
    <div className="flex lg:w-96 w-[320px] flex-col space-y-4 items-center  ">
      {CareerType.map((career, i) => (
        <label
          key={i}
          className={cn(
            buttonVariants({ variant: "outline" }),
            message === career.value
              ? "border-black bg-white dark:border-gray-800 dark:bg-gray-700"
              : "dark:text-white text-black",
            "mr-2 cursor-pointer text-center text-xs font-semibold py-6 rounded-full w-full"
          )}
        >
          {/* This input is hidden because there is no appearance for it */}
          <input
            type="radio"
            name="messageType"
            value={career.value}
            checked={message === career.value}
            onChange={handleMessageTypeChange}
            className="absolute -left-[999px] appearance-none"
          />
          <span data-text={career.value} className="text-xs">
            {career.name}
          </span>
        </label>
      ))}
      <div className="w-full">
        <Link href={"/profile-setup"}>
          <Button type="submit" className="w-full rounded-sm bg-black">
            Continue
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default SelectCareer;
