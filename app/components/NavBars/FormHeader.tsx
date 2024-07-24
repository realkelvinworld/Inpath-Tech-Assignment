import React from "react";
import { Logo } from "../img";
import Image from "next/image";
import Link from "next/link";

function FormHeader() {
  return (
    <main className="flex justify-center items-center dark:bg-slate-950 bg-white py-6 border-b-2 border-slate-300 dark:border-slate-800">
      <div>
        <Link href={"/"}>
          <Image alt="Logo Image" src={Logo} />
        </Link>
      </div>
    </main>
  );
}

export default FormHeader;
