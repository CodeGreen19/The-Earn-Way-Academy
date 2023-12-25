import React, { useEffect, useRef, useState } from "react";
import openEye from "../../assets/svg/open_eye.svg";
import closeEye from "../../assets/svg/close_eye.svg";
import left from "../../assets/svg/left.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginSlide from "./LoginSlide";
import Alert from "../alert/Alert";
import { loginAction, signUpAction } from "../../redux/action/userAction";
function Login() {
  const { email, loggedIn, isMailSent } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState("");

  // if password forgotten
  const forgetPassHandler = () => {
    dispatch(signUpAction({ info: email, forgetReq: true }));
  };

  const submitHandler = () => {
    dispatch(loginAction({ email, password }));
  };

  useEffect(() => {
    if (!email) {
      navigate("/signup");
    }
  }, [email]);

  useEffect(() => {
    if (loggedIn) {
      navigate("/account");
    }
  }, [loggedIn]);
  useEffect(() => {
    if (isMailSent) {
      navigate("/login/confirm/otp");
    }
  }, [isMailSent]);

  return (
    <div className="min-h-screen items-center justify-center p-3 lg:flex">
      <div className="m-auto my-[30px] w-full p-4 lg:w-1/2">
        <div className="m-auto max-w-[350px]">
          <h2 className="my-2 text-[1.3rem]">Password</h2>
          <div className="login_pass_box relative">
            <input
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="enter your password"
            />
            <span onClick={() => setShowPass(!showPass)}>
              {showPass ? (
                <img src={openEye} className="w-[31px]" alt="eye" />
              ) : (
                <img src={closeEye} className="w-[31px]" alt="eye" />
              )}
            </span>
          </div>
          <p
            className=" ls_1 cursor-pointer py-2 text-right text-[0.9rem] text-[tomato]"
            onClick={forgetPassHandler}
          >
            forget password ?
          </p>
          <div className="flex justify-end">
            <button
              className={`mt-3 w-[90px] cursor-pointer  rounded  p-3 text-[white] ${
                password.length > 4 ? "bg-[green]" : "bg-[#767676]"
              }`}
              onClick={submitHandler}
              disabled={password.length < 4 ? true : false}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
      <div className="hidden w-1/2  lg:block">
        <div className="m-auto w-[70%]">
          <LoginSlide />
        </div>
      </div>
    </div>
  );
}

export default Login;
