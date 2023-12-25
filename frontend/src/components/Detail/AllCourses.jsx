import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allCourseAction } from "../../redux/action/courseAction";

function AllCourses() {
  const { courses } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allCourseAction());
  }, [dispatch]);
  return (
    <div className="m-auto min-h-screen w-full lg:w-[80%]">
      <div className="mt-5 flex w-full flex-wrap items-center justify-start gap-4">
        {courses &&
          courses.map((course) => (
            <div className="h-[200px] max-w-[300px] flex-none overflow-hidden rounded-md  bg-red-200 md:w-[250px]">
              <div className="w-full">
                <img src={course.thumbnail} alt="thumbnails" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default AllCourses;
