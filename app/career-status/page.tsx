import React from "react";
import SelectCareer from "../components/SelectCareer";
import FormHeader from "../components/NavBars/FormHeader";

function page() {
  return (
    <main className="h-screen dark:bg-slate-950 bg-white">
      <section>
        <FormHeader />
      </section>
      <section className="flex flex-col items-center justify-center mt-24">
        <h1 className="font-semibold dark:text-white text-black text-2xl lg:w-96 w-[320px]">
          Where are you currently in your professional career?
        </h1>
        <SelectCareer />
      </section>
    </main>
  );
}

export default page;
