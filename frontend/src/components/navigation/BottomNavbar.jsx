import React from "react";

import Home from "../../assets/svg/home.svg";
import Rocket from "../../assets/svg/rocket.svg";
import Profile from "../../assets/svg/profile.svg";
import Grid from "../../assets/svg/grid.svg";
import { Link, useNavigate } from "react-router-dom";
function BottomNavbar() {
  const navigate = useNavigate();
  return (
    <ul className="bottom_navbar b_1 fixed bottom-0 left-0 flex h-[65px] w-full items-center justify-between bg-[white] px-[17px] md:hidden">
      <li>
        <Link>
          <img className="h-[26px]" src={Home} alt="home" />
          <span onClick={() => navigate("/")}>Home</span>
        </Link>
      </li>
      <li>
        <Link>
          <img className="h-[26px]" src={Rocket} alt="home" />
          <span onClick={() => navigate("/")}>Skills</span>
        </Link>
      </li>
      <li>
        <Link>
          <img className="h-[26px]" src={Profile} alt="home" />
          <span onClick={() => navigate("/profile")}>Profile</span>
        </Link>
      </li>
      <li>
        <Link>
          <img className="h-[19px]" src={Grid} alt="home" />
          <span onClick={() => navigate("/")}>Extra</span>
        </Link>
      </li>
    </ul>
  );
}

export default BottomNavbar;
