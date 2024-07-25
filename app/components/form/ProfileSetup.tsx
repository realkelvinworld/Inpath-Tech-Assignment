/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import { EducationLight, Profiletabs } from "../db";
import ProfileTracker from "./ProfileTracker";
import { Plus } from "lucide-react";
import Image from "next/image";
import FormHeader from "../NavBars/FormHeader";
import { FormWork } from "../Modals/FormWork";
import { FormUpload } from "../Modals/FormUpload";
import { FormAccomplishments } from "../Modals/FormAccomplishment";
import { FormEdu } from "../Modals/FormEdu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function ProfileSetup() {
  const [isFormEduOpen, setIsFormEduOpen] = useState<boolean>(false);
  const [isFormWorkOpen, setIsFormWorkOpen] = useState<boolean>(false);
  const [isFormAccomplishmentsOpen, setIsFormAccomplishmentsOpen] =
    useState<boolean>(false);
  const [isFormUploadOpen, setIsFormUploadOpen] = useState<boolean>(false);

  const handleClick = (id: number) => {
    if (id === 1) {
      setIsFormEduOpen(true);
    } else if (id === 2) {
      setIsFormWorkOpen(true);
    } else if (id === 5) {
      setIsFormAccomplishmentsOpen(true);
    } else if (id === 6) {
      setIsFormUploadOpen(true);
    }
  };

  const closeModal = (id: number) => {
    if (id === 1) {
      setIsFormEduOpen(false);
    } else if (id === 2) {
      setIsFormWorkOpen(false);
    } else if (id === 5) {
      setIsFormAccomplishmentsOpen(false);
    } else if (id === 6) {
      setIsFormUploadOpen(false);
    }
  };

  return (
    <div className="lg:h-screen h-full pb-40 dark:bg-slate-950 bg-white">
      <FormHeader />
      <section className="flex lg:flex-row flex-col justify-center mt-20 gap-x-20 px-4">
        <div className="">
          <ProfileTracker />
        </div>
        <div className="flex flex-col lg:w-[600px]">
          {Profiletabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleClick(tab.id)}
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
          <div className="flex pt-4 space-x-2">
            <Link href={"/sign-up"} className="flex-1">
              <Button variant="outline" className="rounded-sm w-full">
                I'll do it later
              </Button>
            </Link>
            <Link href={"/sign-up"} className="flex-1">
              <Button className="rounded-sm w-full">Done</Button>
            </Link>
          </div>
        </div>
      </section>
      <div className="hidden">
        <FormEdu open={isFormEduOpen} onClose={() => closeModal(1)} />
        <FormWork open={isFormWorkOpen} onClose={() => closeModal(2)} />
        <FormAccomplishments
          open={isFormAccomplishmentsOpen}
          onClose={() => closeModal(5)}
        />
        <FormUpload open={isFormUploadOpen} onClose={() => closeModal(6)} />
      </div>
    </div>
  );
}

export default ProfileSetup;
