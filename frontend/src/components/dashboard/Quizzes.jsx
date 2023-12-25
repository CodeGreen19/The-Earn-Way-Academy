import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AllQuizzesAction,
  deleteQuizAction,
} from "../../redux/action/quizAction";
import del from "../../assets/svg/delete.svg";

function Quizzes() {
  const { quizzes } = useSelector((state) => state.quizzes);
  const dispatch = useDispatch();
  const handleDelete = (item) => {
    dispatch(deleteQuizAction(item._id)).then(() => {
      dispatch(AllQuizzesAction());
    });
  };
  useEffect(() => {
    dispatch(AllQuizzesAction());
  }, [dispatch]);
  return (
    <div className="b_1 m-auto  mt-3 w-full bg-[whitesmoke] p-3 lg:w-[70%]">
      <ul>
        {quizzes &&
          quizzes.map((item) => (
            <li className="b_1 my-3 rounded-md bg-[white] p-3">
              <h3>{`Title : ${item.title}`}</h3>
              <h2 className=""> Quiz : {item.quiz.length}</h2>
              <h1 className="flex items-center justify-between text-[tomato]">
                <span> Id : {item._id}</span>{" "}
                <img
                  onClick={() => handleDelete(item)}
                  src={del}
                  className="w-[25px] cursor-pointer"
                  alt="deleteImg"
                />
              </h1>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Quizzes;
