import React, { useEffect, useState } from "react";
import openEye from "../../assets/svg/open_eye.svg";
import closeEye from "../../assets/svg/close_eye.svg";
import toast, { Toaster } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { loadUserAction, userInfoAction } from "../../redux/action/userAction";
import { useNavigate } from "react-router-dom";
import LoginSlide from "./LoginSlide";

function ExtraInfo() {
  const { email, loggedIn } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [confirmShow, setConfirmShow] = useState(false);
  const [newPassShow, setNewPassShow] = useState(false);

  const toastOptions = {
    style: {
      borderRadius: "6px",
      background: "white",
      color: "tomato",
      border: "1px solid tomato",
      boxShadow: "none",
    },
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!name || !newPass || !confirmPass) {
      return toast("Please fill all the fields", toastOptions);
    }
    if (newPass !== confirmPass) {
      return toast("New and confirm password does not match!", toastOptions);
    }
    if (confirmPass.length < 5) {
      return toast("password must be at least 5 char!", toastOptions);
    }

    let data = {
      name,
      password: newPass,
      email,
    };

    dispatch(userInfoAction(data)).then(() => {
      dispatch(loadUserAction());
    });

    // dispatch here
  };
  useEffect(() => {
    if (!email) {
      navigate("/signup");
    }
  }, [email]);

  // if logged in
  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);
  return (
    <div className="min-h-screen items-center justify-center p-3 lg:flex">
      <div className="m-auto my-[20px] w-full p-2 lg:w-1/2">
        <div className="m-auto max-w-[350px]">
          <Toaster />
          <form
            className="extra_user_info mt-[30px] flex flex-col gap-4"
            onSubmit={HandleSubmit}
          >
            <h1 className="ls_1 mb-[20px] text-[1.3rem] ">
              Secure Your Account !
            </h1>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder=" enter your name"
            />
            <div>
              <input
                type={newPassShow ? "text" : "password"}
                value={newPass}
                onChange={(e) => setNewPass(e.target.value)}
                placeholder="new password"
              />
              <span onClick={() => setNewPassShow(!newPassShow)}>
                {newPassShow ? (
                  <img src={openEye} className="w-[31px]" alt="eye" />
                ) : (
                  <img src={closeEye} className="w-[31px]" alt="eye" />
                )}
              </span>
            </div>
            <span className="text-[0.9rem] text-[gray]">
              Password must be at least 5 characters.
            </span>
            <div>
              <input
                type={confirmShow ? "text" : "password"}
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                placeholder="confirm password"
              />
              <span onClick={() => setConfirmShow(!confirmShow)}>
                {confirmShow ? (
                  <img src={openEye} className="w-[31px]" alt="eye" />
                ) : (
                  <img src={closeEye} className="w-[31px]" alt="eye" />
                )}
              </span>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className={`mt-3 w-[85px] rounded  px-4 py-3 text-[white] ${
                  name && newPass && confirmPass ? "bg-[green]" : "bg-[gray]"
                }`}
              >
                Submit
              </button>
            </div>
          </form>
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

export default ExtraInfo;
