import React from "react";
import SecondaryNav from "../components/SecondaryNav";

function page() {
  return (
    <main className="h-screen flex flex-col justify-center items-center ">
      <div>
        <SecondaryNav />
      </div>
      <div>
        <h1 className="font-bold text-7xl text-green-700">Trainings</h1>
      </div>
    </main>
  );
}

export default page;
