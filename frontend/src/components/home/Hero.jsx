import React, { useEffect, useState } from "react";
import topRated from "../../assets/svg/top-rated.svg";
import { heroOptions } from "../helper/Arrays";

function Hero() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);
  return (
    <div
      className={`hero_container ${
        pageLoaded ? "add" : ""
      } min-h-screen  bg-[#2e2e2e] px-[10px] pt-[20px] lg:px-[90px] lg:pt-[40px]`}
    >
      <h1 className={`tewa_heading`}>THE EARN WAY ACADEMY</h1>
      <h2 className="flex items-end gap-2">
        <img src={topRated} alt="top rated" className="w-[30px]" />
        <span className=" text-[white]">Learn Here</span>
      </h2>
      <div className="hero_boxes">
        {heroOptions.map((item) => (
          <div className="hero_box_1 flex items-center justify-between px-[15%] lg:flex-col lg:justify-center lg:px-[0]">
            <img src={item.svg} className="w-[65px]" alt={item.title} />
            <span className="m-3 text-[white]">
              {item.title} {item.icon}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
