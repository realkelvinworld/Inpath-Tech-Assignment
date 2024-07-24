"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { AccountType, AccountType2 } from "./db";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

function SelectAccount() {
  const [message, setMessage] = useState("");

  function handleMessageTypeChange(e: any) {
    const packageName = e.target.value;
    setMessage(packageName);
  }

  return (
    <main className="container mx-auto px-4">
      <div className="space-y-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {AccountType.map((account, i) => (
            <label
              key={i}
              className={cn(
                buttonVariants({ variant: "outline" }),
                message === account.value
                  ? "border-black bg-white dark:border-gray-800 dark:bg-gray-700 text-black"
                  : "text-black",
                "cursor-pointer text-left text-xs font-semibold w-full md:w-64 lg:w-80 flex flex-col justify-start items-start h-40 p-4 rounded-none text-slate-500"
              )}
            >
              <input
                type="radio"
                name="messageType"
                value={account.value}
                checked={message === account.value}
                onChange={handleMessageTypeChange}
                className="absolute -left-[999px] appearance-none"
              />
              <span className="text-xs mb-2">
                <Image src={account.imageUsed} alt="Image used" />
              </span>
              <p className="text-[12px]">{account.value}</p>
              <p className="text-[12px]   text-gray-400">
                {account.description}
              </p>
            </label>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {AccountType2.map((account2, i) => (
            <label
              key={i}
              className={cn(
                buttonVariants({ variant: "outline" }),
                message === account2.value
                  ? "border-black bg-white dark:border-gray-800 dark:bg-gray-700 text-black"
                  : "text-black",
                "cursor-pointer text-left text-xs font-semibold w-full md:w-64 lg:w-80 flex flex-col justify-start items-start h-40 p-4 relative text-slate-500 rounded-none"
              )}
            >
              <input
                type="radio"
                name="messageType"
                value={account2.value}
                checked={message === account2.value}
                onChange={handleMessageTypeChange}
                className="absolute -left-[999px] appearance-none"
              />
              <span className="text-xs mb-2">
                <Image src={account2.imageUsed} alt="Image used" />
              </span>
              <p className="text-[12px]">{account2.value}</p>
              <p className="text-[12px]   text-gray-400">
                {account2.description}
              </p>
              {account2.comingSoon && (
                <span className="absolute top-[1px] right-[1px] bg-amber-100 text-amber-500 p-2 rounded-none">
                  {account2.comingSoon}
                </span>
              )}
            </label>
          ))}
        </div>
      </div>
      <div className="w-full mt-4">
        <Link href={"/sign-up"}>
          <Button
            type="submit"
            className="w-full rounded-sm bg-black flex justify-center items-center"
          >
            Next
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </div>
    </main>
  );
}

export default SelectAccount;
