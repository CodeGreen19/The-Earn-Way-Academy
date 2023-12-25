import React from "react";

function CourseCard() {
  const couser_name =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consequuntur debitis laborum ab quis officiis ipsa";
  return (
    <div className="md:b_1 flex w-full justify-start rounded px-5 md:aspect-[16/16] md:w-[33%] md:flex-col md:px-0">
      <div className="b_1 aspect-[16/9] w-[45%] overflow-hidden rounded md:w-full ">
        <img
          className="w-full"
          src="https://cdn.10minuteschool.com/md/images/k-12-courses/hsc_25_ob.jpeg"
          alt="courseImg"
        />
      </div>
      <div className="flex w-[55%] flex-col justify-between  pl-3 md:w-full md:pl-0 lg:px-3 lg:pt-4">
        <h3 className="text-[0.9rem] leading-[18px] md:text-[1rem] lg:text-[1.2rem] ">
          {couser_name.slice(0, 40)}...
        </h3>
        <h1 className="text-[0.9rem] text-[tomato] lg:mt-3 lg:text-[1.2rem]">
          {" "}
          <span className="mr-[2px] text-[13px]">&#2547;</span> 3210
        </h1>
      </div>
    </div>
  );
}

export default CourseCard;
