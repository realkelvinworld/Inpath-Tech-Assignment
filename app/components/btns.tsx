import { BtnIconProps, BtnProps } from "@/types/props";
import Link from "next/link";

export function BtnPrimary({ text, link, hideNav }: BtnProps) {
  return (
    <Link
      href={link}
      className=" flex flex-nowrap lg:text-3xl text-gray-300  px-4 py-2 hover:bg-opacity-60 hover:transition-all text-xl hover:duration-700 hover:ease-in-out"
      onClick={hideNav}
    >
      <span className="">{text}</span>
    </Link>
  );
}
export function BtnPrimaryIcon({ text, link, hideNav, icon }: BtnIconProps) {
  return (
    <Link
      href={link}
      className=" px-4 py-2 lg:text-3xl text-gray-300 hover:bg-opacity-60 hover:transition-all  hover:duration-700  hover:ease-in-out"
      onClick={hideNav}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </Link>
  );
}
