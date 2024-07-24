"use client";
import { useState } from "react";
import { EducationLight, Profiletabs } from "../db";
import ProfileTracker from "./ProfileTracker";
import { Plus } from "lucide-react";
import Image from "next/image";
import FormHeader from "../NavBars/FormHeader";

function ProfileSetup() {
  const [activeModal, setActiveModal] = useState(null);

  const handleClick = ({ modalType }: any) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className=" h-screen dark:bg-slate-950 bg-white">
      <FormHeader />
      <section className=" flex lg:flex-row flex-col justify-center mt-20 gap-x-20 px-4">
        <div className="">
          <ProfileTracker />
        </div>
        <div className=" flex flex-col  lg:w-[600px] ">
          {Profiletabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => handleClick(tab.modalType)}
              className="flex justify-between border-b py-4 dark:hover:bg-slate-600 hover:bg-slate-200 px-2"
            >
              <span className="flex flex-col">
                <span className="flex gap-x-4 items-center">
                  {tab.id === 1 ? (
                    <>
                      <Image
                        src={tab.icon}
                        alt="Icon"
                        className="block dark:hidden"
                      />
                      <Image
                        src={EducationLight}
                        alt="Education Light Icon"
                        className="hidden dark:block"
                      />
                    </>
                  ) : (
                    <Image src={tab.icon} alt="Icon" />
                  )}
                  <p className="font-semibold text-[16px]">{tab.title}</p>
                </span>
                <p className="text-[13px] pl-6 py-3 text-slate-400">
                  {tab.description}
                </p>
              </span>

              <span>
                <Plus className="w-6 h-7" />
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* {activeModal === "textEditor" && <TextEditorModal onClose={closeModal} />}
      {activeModal === "form" && <FormModal onClose={closeModal} />}
      {activeModal === "upload" && <UploadModal onClose={closeModal} />} */}
      {/* Add more modals as needed */}
    </div>
  );
}

export default ProfileSetup;
