"use client";
import React from "react";
import Navbar from "./NavBar";
import NavSwitch from "./NavSwitch";
import { usePathname } from "next/navigation";

function NavComponent() {
  const pathname = usePathname();
  return (
    <main
      className={`${pathname === "/" ? "block" : "hidden"} fixed w-full top-0`}
    >
      <NavSwitch />
      <Navbar />
    </main>
  );
}

export default NavComponent;
