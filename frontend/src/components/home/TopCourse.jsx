import React from "react";
import Slider from "./Slider";
import Skill from "../../assets/svg/skill.svg";

function TopCourse() {
  return (
    <div className="mt-[100px]">
      <div className="flex flex-col items-center justify-center">
        <h4 className="flex items-end">
          <img src={Skill} className="w-[40px]" alt="skill svg" />
          <span className="ls_1 ml-2 text-[tomato]">TOP COURSES</span>
        </h4>
        <h2 className="my-2 text-[1.5rem] lg:text-[2.2rem]">
          Our Skill Development Courses
        </h2>
      </div>
      <Slider />
    </div>
  );
}

export default TopCourse;
