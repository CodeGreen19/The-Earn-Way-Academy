import React from "react";
import fb from "../../assets/socialSvg/facebook.svg";
import yt from "../../assets/socialSvg/youtube.svg";
import insta from "../../assets/socialSvg/instagram.svg";
import tiktok from "../../assets/socialSvg/tiktok.svg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CopyrightIcon from "@mui/icons-material/Copyright";
function Footer() {
  return (
    <div className="main_footer z-20 mb-[65px] flex h-[19vh] w-full flex-col items-end justify-end bg-[#1e1e1e] px-3 py-3 text-white md:mb-0">
      <ul className="social_icons flex w-full items-center justify-end gap-3 sm:mr-2 sm:gap-5 ">
        <li>
          <a
            href="https://www.tiktok.com/@the.earn.way.acad?_t=8i0ujqgKcRV&_r=1"
            className=""
          >
            <img src={tiktok} className="w-[30px] " alt="tiktok" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/hmnajmul24?igshid=YTQwZjQ0NmI0OA%3D%3D">
            <img src={insta} className="w-[28px]" alt="tiktok" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@TheEarnWayAcademy">
            <img src={yt} className="w-[32px]" alt="tiktok" />
          </a>
        </li>
        <li>
          <a href="https://web.facebook.com/the.earn.way?mibextid=ZbWKwL&_rdc=1&_rdr">
            <img src={fb} className="w-[25px]" alt="tiktok" />
          </a>
        </li>
      </ul>
      <div className="footer_location mt-3 text-right sm:self-start sm:text-left">
        <span>
          <LocationOnIcon />
          <span> Bangladesh</span>
        </span>
        <br />
        <span className="text-[0.8rem] tracking-[1px] text-[#b8b8b8]">
          <CopyrightIcon /> 2023, All Right Reserved
        </span>
      </div>
    </div>
  );
}

export default Footer;
