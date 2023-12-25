import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import alarm from "../../../assets/quiz/alarm.svg";
import title from "../../../assets/quiz/title.svg";
import quiz from "../../../assets/quiz/quiz.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomDots from "./CustomDots";
import CustomLeftArrow from "./CustomLeftArrow";

function QuizBox({ open, setOpen }) {
  const [selectedQ, setSelectedQ] = useState(1);
  const [selectedArr, setSelectedArr] = useState([]);
  const [nextQ, setNextQ] = useState(2);
  const [QuizArr, setQuizArr] = useState([
    {
      questionNo: 1,
      _id: 1,
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Hyperlinks and Text Markup Language",
        "Home Tool Markup Language",
        "Hyper Transfer Markup Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      questionNo: 2,
      _id: 2,
      question: "Which of the following is not a programming language?",
      options: ["Python", "Java", "HTML", "C++"],
      answer: "HTML",
    },
    {
      questionNo: 3,
      _id: 3,
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
  ]);
  const handleOptionClick = (quiz, ansOption) => {
    setSelectedArr((prevAnsOption) => {
      const existingAnswer = prevAnsOption.find(
        (answer) => answer.questionId === quiz._id,
      );

      if (existingAnswer) {
        return prevAnsOption.map((answer) =>
          answer.questionId === quiz._id ? { ...answer, ansOption } : answer,
        );
      } else {
        return [...prevAnsOption, { questionId: quiz._id, ansOption }];
      }
    });
  };
  console.log(selectedArr);

  return (
    <div className={`modal_container  ${open && "add"} `}>
      <div className="modal_box">
        <div className="mb-2 w-full">
          <h1 className="flex justify-start text-[1.5rem]">
            <img src={title} className="mr-1 w-[35px]" alt="title" />
            <span>HSC Ict Quiz</span>
          </h1>
          <h1 className="mt-2 flex justify-start text-[1.3rem]">
            <img src={quiz} className="ml-2 mr-1 w-[20px]" alt="title" />
            <span>Quiz-3</span>
          </h1>
        </div>
        {/* options box  */}
        <div className="quiz_options_box relative w-full ">
          <Carousel
            additionalTransfrom={0}
            arrows={true}
            centerMode={false}
            className=""
            containerClass=" w-full py-[40px] m-auto "
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 1,
                partialVisibilityGutter: 100,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 100,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 1,
                partialVisibilityGutter: 100,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={true}
            customDot={<CustomDots />}
            renderDotsOutside
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {QuizArr.map((quiz, index) => (
              <>
                <h1 className="flex items-start justify-start px-3  text-[1.2rem]">
                  <span className=" text-[1.3rem] font-bold text-[tomato]">
                    {index + 1}.
                  </span>
                  &nbsp;
                  <span>{quiz.question}</span>
                </h1>
                <ul className="m-auto w-[80%] pb-6 md:w-[70%]">
                  {quiz.options.map((item, i) => (
                    <li
                      onClick={() => handleOptionClick(quiz, i)}
                      key={i}
                      className={`b_1 $ my-2 flex w-full cursor-pointer items-center  justify-center  rounded-md px-2 py-[14px] text-center text-[1.1rem]  `}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            ))}
          </Carousel>
        </div>
        <div className="flex w-full justify-between px-2 pt-2">
          <div className="flex items-center justify-start ">
            <img src={alarm} className="mr-2 w-[30px]" alt="alermSvg" />
            <span>04:34</span>
          </div>
          <button className="signature_btn ls_1 ">Finish</button>
        </div>
        <button onClick={() => setOpen(false)} className="modal_btn">
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}

export default QuizBox;
