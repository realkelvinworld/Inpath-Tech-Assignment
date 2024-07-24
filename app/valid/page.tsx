import React from "react";
import FormHeader from "../components/FormHeader";
import Image from "next/image";
import Link from "next/link";
import { VerifyImage } from "../components/img";

function page() {
  return (
    <main className="dark:bg-slate-950 bg-white h-screen">
      <section>
        <FormHeader />
      </section>
      <section className="flex flex-col justify-center items-center lg:mt-52 mt-28 px-4">
        <div>
          <Image src={VerifyImage} alt="Verify Image" />
        </div>
        <div>
          <h1 className="text-center font-semibold lg:text-3xl text-2xl">
            Verify your account
          </h1>
          <p className="text-center my-4 text-slate-400 font-semibold">
            A verification email will be sent to your email address <br />{" "}
            provided. Click on the link in the mail to verify your account.
          </p>
          <p className="text-center  py-3 font-semibold text-gray-500  bg-slate-200 rounded-full">
            mic***@inpathgroup.africa
          </p>
          <p className="text-center font-semibold mt-10 text-green-700 dark:text-green-500">
            <Link href={"/sign-up"}>Resend Link</Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default page;
