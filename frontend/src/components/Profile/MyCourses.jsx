import React, { Fragment } from "react";
import Headline from "../helper/Headline";
import { useNavigate } from "react-router-dom";

function MyCourses() {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="m-auto min-h-screen w-full p-1 md:p-5 lg:w-[80%]">
        <Headline text={"my Courses"} side={"start"} />
        <div>
          <div className=" w-[250px] overflow-hidden rounded-md">
            <div className="b_1 overflow-hidden rounded-md">
              <img
                className="w-full"
                src={
                  "https://cdn.10minuteschool.com/md/images/k-12-courses/hsc_25_ob.jpeg"
                }
                alt="courses image"
              />
              <div className="m-2">
                <div className=" py-2 text-[1.2rem] font-bold">
                  HSC online course
                </div>
                <div>
                  Completed :{" "}
                  <span className="text-[1.3rem] font-bold text-[green]">
                    35%
                  </span>{" "}
                </div>
                <div className="my-2 text-[0.9rem] text-[tomato]">
                  remaining : 35 days
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => navigate("/premium/videos")}
                className=" mt-2 w-[120px] rounded-md bg-[green] py-2 text-[1.1rem] text-[white] "
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MyCourses;
