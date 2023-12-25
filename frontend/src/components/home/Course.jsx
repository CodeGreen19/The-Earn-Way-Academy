import React, { useState } from "react";
import CourseCard from "./CourseCard";
import bag from "../../assets/svg/bag.svg";

function Course() {
  const [courseCard, setcourseCard] = useState(["", "", "", ""]);
  return (
    <div className="bg-[#f4f8ff] pb-[50px] pt-[50px] lg:pb-[100px]">
      <div className="p-3 py-6">
        <h3 className="flex items-center justify-center gap-2">
          <img src={bag} alt="bag icon" className="w-[30px]" />
          <span className="ls_1 pt-4 text-[tomato]">SSC & HSC</span>
        </h3>
        <h2 className="text-center text-[1.5rem] lg:text-[2.2rem]">
          For SSC and HSC Students
        </h2>
      </div>
      <div className="my-3 flex items-center justify-center">
        <div className="flex  flex-col gap-5 md:flex-row md:gap-6 lg:px-[150px]">
          {courseCard.map(() => (
            <CourseCard />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Course;
