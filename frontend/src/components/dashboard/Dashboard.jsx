import React, { useEffect, useState } from "react";
import "../style/Dashboard.css";
import Quiz from "./Quiz";
import ham from "../../assets/svg/ham.svg";
import CloseIcon from "@mui/icons-material/Close";
import Quizzes from "./Quizzes";
import AllUsers from "./AllUsers";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MyChart from "./MyChart";
import BarChart from "./BarChart";

function Dashboard() {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("Dashboard");
  const [showDashboard, setShowDashboard] = useState(false);

  const dashboardOptions = [
    "Dashboard",
    "All Users",
    "Create Quiz",
    "All Quizzes",
    "Create Course",
    "All Courses",
    "Send SMS to All Users",
  ];
  const handleDashboardOption = (item) => {
    setSelectedOption(item);
  };
  useEffect(() => {
    if (user && user.role !== "admin") {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <div className="main_dashboard min-h-screen lg:pr-[240px]">
      <div
        className={`bl_1 fixed right-0 top-0  z-40  h-[91vh] w-[240px] bg-[white] p-3  pt-[80px] lg:block lg:h-[80vh] lg:translate-x-[0%] ${
          showDashboard ? "translate-x-[0%]" : "translate-x-[100%]"
        }`}
      >
        <h1
          className="text-[red] lg:hidden"
          onClick={() => setShowDashboard(false)}
        >
          <CloseIcon />
        </h1>
        <h1 className="m-4 text-center text-[2rem] font-bold text-[#ff9e43]">
          Dashboard
        </h1>
        <ul className="dashboard_items">
          {dashboardOptions.map((item) => (
            <li
              name={item}
              className={selectedOption === item ? "add" : ""}
              onClick={() => handleDashboardOption(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={() => setShowDashboard(true)}
        className="fixed right-[20px] top-[80px] z-30 rounded bg-[white] p-1 lg:hidden"
      >
        <img src={ham} className="w-[25px]" alt="hamburger" />
      </div>
      <div>
        {selectedOption === "All Users" ? (
          <AllUsers />
        ) : selectedOption === "Create Quiz" ? (
          <Quiz />
        ) : selectedOption === "All Quizzes" ? (
          <Quizzes />
        ) : (
          // "this is the dashboard"
          <div>
            <MyChart />
            <BarChart />
          </div>
        )}
        {/* <Quiz /> */}
        {/* <Quizzes /> */}
      </div>
    </div>
  );
}

export default Dashboard;
