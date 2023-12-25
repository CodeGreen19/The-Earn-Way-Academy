import React, { Fragment, useEffect, useState } from "react";
import key from "../../assets/changePassSvg/key.svg";
import newPass from "../../assets/changePassSvg/confirmPass.svg";
import confirmPass from "../../assets/changePassSvg/newPass.svg";
import toast, { Toaster } from "react-hot-toast";
import Headline from "../helper/Headline";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changePassword } from "../../redux/action/userAction";

function ChangePass() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [activateBtn, setActivateBtn] = useState(false);

  const handleSubmit = () => {
    if (newPassword !== confirmPassword) {
      return toast.error("new Password and comfirm password do not match");
    }
    let info = { oldPassword, newPassword };
    setNewPassword("");
    setOldPassword("");
    setConfirmPassword("");
    dispatch(changePassword(info));
  };

  useEffect(() => {
    if (
      oldPassword.length > 4 &&
      newPassword.length > 4 &&
      confirmPassword.length > 4
    ) {
      setActivateBtn(true);
    } else {
      setActivateBtn(false);
    }
  }, [oldPassword, newPassword, confirmPassword]);
  return (
    <Fragment>
      <Toaster />
      <div className="flex min-h-screen items-start justify-center p-2 pt-[60px] md:pt-[100px]">
        <ul className="change_pass_box   ">
          <Headline text={"Change Password"} side={"start"} />
          <li>
            <img className="w-[25px]" src={key} alt="profile" />{" "}
            <input
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              type="text"
              placeholder=" Old Password"
            />
          </li>
          <li>
            <img className="w-[25px]" src={newPass} alt="profile" />{" "}
            <input
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              type="text"
              placeholder=" New Password"
            />
          </li>
          <li>
            <img className="w-[25px]" src={confirmPass} alt="profile" />{" "}
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="text"
              placeholder=" Confirm Password"
            />
          </li>
          <div className="flex justify-end">
            <button
              disabled={activateBtn ? false : true}
              onClick={handleSubmit}
              className={`signature_btn ${activateBtn ? "" : "bg-[gray]"}`}
            >
              Confirm
            </button>
          </div>
        </ul>
      </div>
    </Fragment>
  );
}

export default ChangePass;
