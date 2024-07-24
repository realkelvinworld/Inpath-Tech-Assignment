import React from "react";
import FormNav from "../components/FormNav";
import FormHeader from "../components/FormHeader";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="dark:bg-slate-950 bg-white">
      <FormHeader />
      <div className="flex flex-col justify-center items-center h-[90vh] dark:bg-slate-950 bg-white ">
        <FormNav />
        <main className=" p-10 dark:bg-slate-950 bg-white w-full max-w-md">
          {children}
        </main>
      </div>
    </main>
  );
}
