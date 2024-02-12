import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import BottomNavbar from "./components/navigation/BottomNavbar";
import MobileNav from "./components/navigation/MobileNav";
import Home from "./components/home/Home";
import Signup from "./components/login/Signup";
import ConfirmOtp from "./components/login/ConfirmOtp";
import ExtraInfo from "./components/login/ExtraInfo";
import Loading from "./components/loading/Loading";

import Footer from "./components/footer/Footer";
import CourseDetail from "./components/Detail/CourseDetail";
import Payment from "./components/payment/Payment";
import ChangePass from "./components/Profile/ChangePass";
import Account from "./components/Profile/Account";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUserAction } from "./redux/action/userAction";

import toast, { Toaster } from "react-hot-toast";
import Login from "./components/login/Login";
import MyCourses from "./components/Profile/MyCourses";
import CourseVideos from "./components/premium/CourseVideos";
import Quiz from "./components/dashboard/Quiz";
import Dashboard from "./components/dashboard/Dashboard";
import CreateCourse from "./components/dashboard/CreateCourse";
import AllCourses from "./components/Detail/AllCourses";
import SearchResults from "./components/search/SearchResults";

const toastOptions = {
  style: {
    borderRadius: "2",
    background: "black",
    color: "white",
    boxShadow: "none",
  },
};
function App() {
  const dispatch = useDispatch();
  const { error, message } = useSelector((state) => state.user);
  const { error: quizError, message: quizMessage } = useSelector(
    (state) => state.quizzes,
  );

  useEffect(() => {
    if (error || quizError) {
      toast.error(error || quizError, toastOptions);
      dispatch({ type: "clearError" });
    }
    if (message || quizMessage) {
      toast.success(message || quizMessage, toastOptions);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, quizError, message, quizMessage]);

  useEffect(() => {
    dispatch(loadUserAction());
  }, [dispatch]);
  return (
    <>
      <Router>
        <div>
          <MobileNav />
          <Toaster />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/confirm/otp" element={<ConfirmOtp />} />
            <Route path="/login/extra/info" element={<ExtraInfo />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/course/detail" element={<CourseDetail />} />
            <Route path="/course/payment" element={<Payment />} />
            <Route path="/change/password" element={<ChangePass />} />
            <Route path="/account" element={<Account />} />
            <Route path="/mycourses" element={<MyCourses />} />
            <Route path="/premium/videos" element={<CourseVideos />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create/course" element={<CreateCourse />} />
            <Route path="/course/all" element={<AllCourses />} />
            <Route path="/course/search" element={<SearchResults />} />
          </Routes>
          <Footer />
          <BottomNavbar />
        </div>
      </Router>
    </>
  );
}

export default App;
