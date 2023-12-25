import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import "../style/Dashboard.css";
import toast from "react-hot-toast";
import { newQuizAction } from "../../redux/action/quizAction";
const toastOptions = {
  style: {
    borderRadius: "2",
    background: "black",
    color: "white",
    boxShadow: "none",
  },
};
function Quiz() {
  const dispatch = useDispatch();
  const [quizArr, setQuizArr] = useState([]);
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correct, setCorrect] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (
      !question ||
      !option1 ||
      !option2 ||
      !option3 ||
      !option4 ||
      !correct ||
      !title
    ) {
      toast.error("please fill all the fields", toastOptions);
    } else {
      if (
        correct === "a" ||
        correct === "b" ||
        correct === "c" ||
        correct === "d"
      ) {
        setQuestion("");
        setOption1("");
        setOption2("");
        setOption3("");
        setOption4("");
        setCorrect("");
        let data = {
          questionTxt: question,
          options: [
            { optionText: option1 },
            { optionText: option2 },
            { optionText: option3 },
            { optionText: option4 },
          ],
          correctAnswer: correct,
        };
        setQuizArr((options) => [...options, data]);
      } else {
        toast.error("Please type a/b/c/d in the correct box", toastOptions);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuizArr([]);
    setTitle("");
    if (quizArr.length > 0) {
      dispatch(newQuizAction(title, quizArr));
    } else {
      toast.error("add some new quiz", toastOptions);
    }
  };

  return (
    <div className=" b_1 m-auto my-[10px] min-h-screen w-full bg-slate-50 p-1 md:w-[600px]  md:p-5">
      <form className="quiz_form relative flex flex-col">
        <input
          className="title_input bg-[transparent]"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Give a title here..."
        />
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="enter question..."
        />
        <div className=" flex flex-col">
          <div className="flex w-full">
            <span>
              <input
                type="text"
                value={option1}
                onChange={(e) => setOption1(e.target.value)}
                placeholder="a"
              />
            </span>
            <span>
              <input
                type="text"
                value={option2}
                onChange={(e) => setOption2(e.target.value)}
                placeholder="b"
              />
            </span>
          </div>
          <div className="flex w-full">
            <span>
              <input
                type="text"
                value={option3}
                onChange={(e) => setOption3(e.target.value)}
                placeholder="c"
              />
            </span>
            <span>
              <input
                type="text"
                value={option4}
                onChange={(e) => setOption4(e.target.value)}
                placeholder="d"
              />
            </span>
          </div>
        </div>
        <div className="mt-4 flex  gap-1">
          <input
            type="text"
            value={correct}
            onChange={(e) => setCorrect(e.target.value)}
            className="mr-2 w-[90px] rounded-md"
            placeholder="Correct"
          />
          <button
            className="btn w-[80px] rounded-md bg-[tomato] text-[white]"
            onClick={handleAdd}
          >
            Add <AddIcon />
          </button>
        </div>
      </form>
      {quizArr &&
        quizArr.map((item, i) => (
          <form className="quiz_arr my-3 flex flex-col">
            <p>
              <span className="mr-5px">{i + 1}.</span>
              <span> {item.questionTxt}</span>
            </p>
            <div className="quiz_option_box flex bg-[white] p-2">
              <div className="flex w-1/2 flex-col">
                <span>
                  <span>a</span>
                  {item.options[0].optionText}
                </span>
                <span>
                  <span>c</span>
                  {item.options[2].optionText}
                </span>
              </div>
              <div className="flex w-1/2 flex-col">
                <span>
                  <span>b</span>
                  {item.options[1].optionText}
                </span>
                <span>
                  <span>d</span>

                  {item.options[3].optionText}
                </span>
              </div>
            </div>
            <h2 className=" text-[1.2rem] text-[tomato]">
              <span>correct : </span>
              {item.correctAnswer}
            </h2>
          </form>
        ))}
      <div className="flex justify-end">
        <button
          type="submit"
          onClick={handleSubmit}
          className="signature_btn ls_1 relative right-0 mt-3"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Quiz;
