import React, { useEffect, useRef, useState } from "react";
import HamIcon from "../../assets/svg/ham.svg";
import main_logo from "../../assets/logo/main_logo2.png";
import login_profile from "../../assets/logo/login_profile.svg";
import Phone from "../../assets/svg/call.svg";
import Search from "../../assets/svg/search3.svg";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ListRoundedIcon from "@mui/icons-material/ListRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import { useDispatch, useSelector } from "react-redux";
import { loadUserAction, logoutAction } from "../../redux/action/userAction";

function MobileNav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loggedIn, user } = useSelector((state) => state.user);
  const [profileItem, setProfileItem] = useState(false);
  const boxRef = useRef(null);

  const logoutHandler = () => {
    dispatch(logoutAction()).then(() => {
      dispatch(loadUserAction());
      navigate("/");
    });
  };

  const handleSearch = () => {
    navigate("/course/search");
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setProfileItem(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="bb_1 sticky left-0 top-0 z-50 flex h-[75px] w-full items-center  justify-between bg-[white] md:px-[60px]">
      <div className="flex h-full items-center justify-center">
        <img
          className="main_logo h-full"
          src={main_logo}
          alt="mainLogo"
          onClick={() => navigate("/")}
        />
        <div
          className=" relative ml-3 hidden h-[60%]  w-[300px] md:block "
          onClick={handleSearch}
        >
          <input
            type="text"
            className="b_1 h-full w-full rounded-[50px] border-[#cbcbcb] p-3   pl-[40px] outline-none  "
            placeholder="Search Here..."
          />
          <img
            className="absolute left-[10px] top-[8px] h-[25px]"
            src={Search}
            alt="search_icon"
          />
        </div>
      </div>
      <div className="flex items-center gap-3 p-[15px]  ">
        <ul className="nav_skill_tems mr-6 hidden items-center gap-6 xl:flex">
          <li>English</li>
          <li>ICT</li>
          <li>Basic Computer</li>
          <li>Quran</li>
        </ul>
        <img
          className="h-[30px] md:hidden"
          src={Search}
          alt="search_icon"
          onClick={handleSearch}
        />
        <div className="flex gap-2">
          <img className="h-[25px]" src={Phone} alt="ham_icon" />
          <h2 className="hidden text-[blue] lg:block">01870-425052</h2>
        </div>

        {loggedIn && loggedIn ? (
          <div
            className="relative flex cursor-pointer items-center"
            onClick={() => setProfileItem(true)}
          >
            <img
              className=" ml-2 mr-1 h-[30px]"
              src={login_profile}
              alt="ham_icon"
            />
            <KeyboardArrowDownIcon />
            <ul
              ref={boxRef}
              className={`b_1 nav_profile_items right-0 top-[60px] w-[180px] rounded bg-white p-3 ${
                profileItem ? "absolute" : "hidden"
              }`}
            >
              <li onClick={() => navigate("/mycourses")}>
                <ListRoundedIcon />
                My Courses
              </li>
              <li onClick={() => navigate("/account")}>
                <PersonRoundedIcon /> Account
              </li>
              <li onClick={() => navigate("/change/password")}>
                {" "}
                <VpnKeyIcon />
                Change Password
              </li>
              <li onClick={logoutHandler}>
                <LogoutRoundedIcon />
                Logout
              </li>
              {user.role === "admin" && (
                <li
                  onClick={() => navigate("/dashboard")}
                  className="text-[tomato]"
                >
                  <DashboardRoundedIcon />
                  Dashboard
                </li>
              )}
            </ul>
          </div>
        ) : (
          <button
            className="rounded bg-[#1b991b] px-4 py-2 text-[white]"
            onClick={() => navigate("/signup")}
          >
            Log In
          </button>
        )}

        {/* <img className="h-[30px]" src={HamIcon} alt="ham_icon" /> */}
      </div>
    </div>
  );
}

export default MobileNav;
