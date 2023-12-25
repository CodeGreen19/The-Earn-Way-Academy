import React, { useEffect, useRef, useState } from "react";
import left from "../../assets/svg/left.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpAction, otpSubmitAction } from "../../redux/action/userAction";
import LoginSlide from "./LoginSlide";
import Alert from "../alert/Alert";
function ConfirmOtp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isVarified, email, error } = useSelector((state) => state.user);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [otpValues, setOTPValues] = useState(["", "", "", ""]);
  const [otpNumeber, setOtpNumeber] = useState("");
  const [otpLength, setOtpLength] = useState("");
  const [otpExpire, setOtpExpire] = useState(false);

  const [timeLeft, setTimeLeft] = useState(120); // 3 minutes in seconds
  const [countdown, setCountdown] = useState("");

  // to resend the otp
  const handleResend = () => {
    dispatch(signUpAction({ info: email }));
    setTimeLeft(20);
    setOtpExpire(false);
  };

  // handle the inputs
  const handleInputChange = (index, value) => {
    const newOTPValues = [...otpValues];
    if (value < 10) {
      newOTPValues[index] = value;
      setOTPValues(newOTPValues);
    }

    if (value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && !e.target.value) {
      inputRefs[index - 1].current.focus();
    }
  };
  /// submit the otp
  const submitHandler = () => {
    const info = {
      otp: otpNumeber,
      email,
    };
    dispatch(otpSubmitAction(info));
  };
  // to show coundown
  useEffect(() => {
    const timer = setInterval(() => {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;

      setCountdown(`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`);

      if (timeLeft === 0) {
        clearInterval(timer);
        setOtpExpire(true);
      } else {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // to get the otp
  useEffect(() => {
    const combinedNumber = parseInt(otpValues.join(""), 10);
    setOtpNumeber(combinedNumber);
    setOtpLength(combinedNumber.toString().length);
  }, [otpValues]);

  // to navigate if success
  useEffect(() => {
    if (isVarified) {
      navigate("/login/extra/info");
    }
    if (!email) {
      navigate("/signup");
    }
  }, [isVarified, email]);

  return (
    <div className="min-h-screen items-center justify-center p-3 lg:flex">
      <div className="m-auto my-[30px] w-full p-4 lg:w-1/2">
        <div className="m-auto max-w-[350px]">
          <img className="w-[30px]" src={left} alt="left" />
          <h2>Confirm Your Email</h2>
          <h2>We send 4 degit Email varification to your Gmail Account</h2>

          <div className="confirm_otp_inputs mt-6">
            {inputRefs.map((ref, index) => (
              <input
                key={index}
                type="number"
                ref={ref}
                value={otpValues[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                maxLength={1}
              />
            ))}
          </div>
          <div className="py-3 text-[red]">{error && error}</div>

          <div className="flex justify-end">
            {otpExpire && (
              <p
                className={`flex items-center justify-start text-[0.9rem] text-[red]`}
              >
                {<Alert text={"Your OTP Is Expired!"} />}
              </p>
            )}
            {timeLeft === 0 ? (
              <span onClick={handleResend} className="p-3 text-[green]">
                resend OTP
              </span>
            ) : (
              <span className="p-3 text-[green]">{countdown}</span>
            )}
          </div>
          <div className="flex justify-end ">
            <button
              disabled={otpLength < 4 || otpExpire ? true : false}
              className={`mt-3 w-[85px] rounded bg-[green] px-4 py-3 text-[white] ${
                otpLength === 4 ? "bg-[green]" : "bg-[gray]"
              }`}
              onClick={submitHandler}
            >
              submit
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

export default ConfirmOtp;
