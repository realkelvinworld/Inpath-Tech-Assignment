"use client";
import React from "react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { FormSwitchLinks, NavSwitchLinks } from "./db";
import { usePathname } from "next/navigation";

function FormNav() {
  const pathname = usePathname();
  return (
    <section className="lg:mt-2 mt-14 bg-white dark:bg-slate-950 flex items-center justify-center py-5 border-b dark:border-slate-700 border-slate-300 lg:px-6 md:mx-0 ">
      <div
        className="lg:w-[380px]  w-[340px] bg-slate-100 dark:bg-slate-800 p-2 flex items-center justify-center rounded  gap-x-5
       mx-4"
      >
        {FormSwitchLinks.map(({ id, name, link }) => (
          <div
            key={id}
            className={`flex items-center justify-center px-2 transition-transform duration-300  ${
              pathname === link
                ? "bg-white font-semibold dark:bg-slate-700 p-2 rounded-md"
                : ""
            }`}
          >
            <Link href={link}>
              <p className="dark:text-white text-black lg:text-[13px] text-[12px]">
                {name}
              </p>
            </Link>
          </div>
        ))}
        <ThemeSwitcher />
      </div>
    </section>
  );
}

export default FormNav;
