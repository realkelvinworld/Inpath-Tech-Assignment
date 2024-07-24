import React from "react";
import FormNav from "../components/FormNav";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="dark:bg-slate-950">
      <FormNav />
      <div className="flex justify-center items-center h-[90vh] dark:bg-slate-950 bg-white ">
        <main className=" p-10 dark:bg-slate-950 bg-white w-full max-w-md">
          {children}
        </main>
      </div>
    </main>
  );
}
