// ProfileTracker.tsx
import React, { useState } from "react";
import { ProfileStatus } from "../db";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProfileTracker() {
  const [completedItems, setCompletedItems] = useState<{
    [key: number]: boolean;
  }>({});

  const handleCheckboxChange = (id: number) => {
    setCompletedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const totalItems = ProfileStatus.length;
  const completedCount = Object.values(completedItems).filter(Boolean).length;
  const completionPercentage = (completedCount / totalItems) * 100;

  return (
    <div className="bg-green-700 lg:pb-10 lg:w-[350px] ">
      <div className="herobg2 h-24  flex justify-between px-4 items-center">
        <h1 className="text-white font-semibold">
          Profile <br /> Completion
        </h1>
        <div className="w-14 h-14">
          <CircularProgressbar
            value={completionPercentage}
            text={`${Math.round(completionPercentage)}%`}
            styles={buildStyles({
              textSize: "26px",
              pathColor: `rgba(255, 255, 0, ${completionPercentage / 100})`,
              textColor: "#fff",
              trailColor: "#d6d6d6",
            })}
          />
        </div>
      </div>
      <div className="p-4 lg:block hidden">
        {ProfileStatus.map((status) => (
          <RadioGroup
            key={status.id}
            value={completedItems[status.id] ? "completed" : "not-completed"}
            onValueChange={() => handleCheckboxChange(status.id)}
          >
            <div className="flex items-center justify-between py-4">
              <Label
                htmlFor={`r${status.id}`}
                className="text-white font-semibold text-[14px]"
              >
                {status.value}
              </Label>
              <RadioGroupItem
                value="completed"
                id={`r${status.id}`}
                className="w-4 h-4 border-2 border-white rounded-full bg-transparent"
                checked={completedItems[status.id] || false}
                onChange={() => handleCheckboxChange(status.id)}
              />
            </div>
          </RadioGroup>
        ))}
      </div>
    </div>
  );
}

export default ProfileTracker;
