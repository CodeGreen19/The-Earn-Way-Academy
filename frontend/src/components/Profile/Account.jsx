import React, { Fragment } from "react";
import Headline from "../helper/Headline";
import "../style/Profile.css";
import name from "../../assets/accountSvg/name.svg";
import email from "../../assets/accountSvg/email.svg";
import { useSelector } from "react-redux";

function Account() {
  const { user } = useSelector((state) => state.user);
  return (
    <Fragment>
      {user && (
        <div className="account_container relative min-h-screen">
          <div className=" m-auto w-full  md:w-[60%]">
            <ul className="account_ul_box p-3 md:p-0">
              <Headline text={"my account"} side={"start"} />
              <li>
                <img src={name} className="mr-2 w-[27px]" alt="name" />{" "}
                <span className="text-[1.2rem] md:text-[1.5rem]">
                  <span className="mr-1 text-[0.9rem] md:text-[1rem]">
                    name :
                  </span>{" "}
                  {user.name}
                </span>
              </li>
              <li>
                <img src={email} className="mr-2 w-[27px]" alt="email" />{" "}
                <span className="text-[1.2rem] md:text-[1.5rem]">
                  <span className="mr-1 text-[0.9rem] md:text-[1rem]">
                    email :
                  </span>
                  {user.email}
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Account;
