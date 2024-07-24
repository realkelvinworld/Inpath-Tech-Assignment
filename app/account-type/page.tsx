import React from "react";
import FormHeader from "../components/FormHeader";
import SelectAccount from "../components/SelectAccount";

function page() {
  return (
    <main className=" dark:bg-slate-950 bg-white flex flex-col">
      <section className="w-full">
        <FormHeader />
      </section>
      <div className="flex flex-col  items-center px-4 lg:mt-44 mt-10">
        <h1 className="text-2xl font-semibold my-4 ">
          What type of account are you setting up ?
        </h1>
      </div>
      <div className=" flex justify-center items-center mb-20">
        <div className="lg:w-[700px] w-full flex justify-center">
          <SelectAccount />
        </div>
      </div>
    </main>
  );
}

export default page;
