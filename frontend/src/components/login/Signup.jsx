import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpAction } from "../../redux/action/userAction";
import { useNavigate } from "react-router-dom";
import Loading from "../loading/Loading";
import Alert from "../alert/Alert";
import LoginSlide from "./LoginSlide";

function Signup() {
  const { isMailSent, loading, loggedIn, userExists } = useSelector(
    (state) => state.user,
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [info, setInfo] = useState();
  const [shoAlert, setShoAlert] = useState(false);
  const [firstClick, setFirstClick] = useState(false);
  const [btnActivate, setBtnActivate] = useState(false);
  // regex
  const emailRegex = /\S+@\S+\.\S+/;
  const mobileRegex = /^01[1-5|6-9]\d{8}$/;

  const auth = () => {
    if (
      !(
        (info && info.length === 11 && mobileRegex.test(info)) ||
        emailRegex.test(info)
      )
    ) {
      setShoAlert(true);
    } else {
      setShoAlert(false);
    }
  };

  // to submit the info
  const submitHandler = () => {
    setFirstClick(true);
    if (btnActivate) {
      dispatch(signUpAction({ info, forgetReq: false }));
    }
  };

  useEffect(() => {
    if (firstClick) {
      auth();
    }
    if (
      (info && info.length === 11 && mobileRegex.test(info)) ||
      emailRegex.test(info)
    ) {
      setBtnActivate(true);
    } else {
      setBtnActivate(false);
    }
  }, [info, firstClick]);

  // to navigate if successful

  useEffect(() => {
    if (isMailSent) {
      navigate("/login/confirm/otp");
    }
  }, [isMailSent]);
  // if user logged in successfully
  useEffect(() => {
    if (loggedIn) {
      navigate("/account");
    }
  }, [loggedIn]);

  // if user  already exists
  useEffect(() => {
    if (userExists) {
      navigate("/login");
    }
  }, [userExists]);
  return (
    <div className="min-h-screen items-center justify-center p-3 lg:flex">
      <div className="mt-[50px]  lg:w-1/2">
        <div className="m-auto max-w-[400px]">
          <h3 className="ls_1 my-6 text-[1.1rem]">Continue With gmail/Phone</h3>
          <div className="flex flex-col  gap-3">
            <input
              type="text"
              className="b_1 lg:b_1x w-full rounded px-4 py-4 outline-none"
              placeholder="01...."
              value={info}
              onChange={(e) => setInfo(e.target.value)}
            />
            <p
              className={` text-[0.9rem] text-[red] ${
                !shoAlert ? "hidden" : ""
              }`}
            >
              {<Alert text={"your email/phone is invalid !"} />}
            </p>
            <div className="flex justify-end">
              <button
                className={`mt-3 w-[90px]  rounded  p-3 text-[white] ${
                  btnActivate ? "bg-[green]" : "bg-[#767676]"
                }`}
                onClick={submitHandler}
                disabled={loading ? true : false}
              >
                {loading ? <Loading /> : "Submit"}
              </button>
            </div>
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

export default Signup;
