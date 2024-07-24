import React from "react";
import { Logo } from "./img";
import Image from "next/image";

function FormNav() {
  return (
    <main className="flex justify-center items-center dark:bg-slate-950 bg-white py-6 border-b-2 border-slate-300 dark:border-slate-800">
      <div>
        <Image alt="Logo Image" src={Logo} />
      </div>
    </main>
  );
}

export default FormNav;
