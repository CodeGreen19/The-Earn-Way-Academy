import React, { Fragment, useState } from "react";
import ReactPlayer from "react-player";
import note from "../../assets/videoPageSvg/note.svg";
import videoSvg from "../../assets/videoPageSvg/video.svg";
import question from "../../assets/videoPageSvg/question.svg";
import QuizBox from "./quiz/QuizBox";
import "../style/Premium.css";

function CourseVideos() {
  const [openQuiz, setOpenQuiz] = useState(false);
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/watch?v=k1gWUIjFes8",
  );
  const [videoTitle, setVideoTitle] = useState("Introduction of the Course");
  const videos = [
    {
      id: 1,
      type: "video",
      title: "Introduction of the Course",
      video_url: "https://www.youtube.com/watch?v=k1gWUIjFes8",
    },
    {
      id: 2,
      type: "video",
      title: "Basic information",
      video_url: "https://www.youtube.com/watch?v=fOtncVB1sK4",
    },
    {
      id: 3,
      type: "video",
      title: "practice",
      video_url: "https://www.youtube.com/watch?v=60q6cvaLgWA",
    },
    { id: 4, type: "note", title: "Note 01" },
    { id: 5, type: "quiz", title: "Quiz 01" },
    {
      id: 6,
      type: "video",
      title: "Move to advanced",
      video_url: "https://www.youtube.com/watch?v=AsltzQW66ZA",
    },
  ];

  const handleClick = (item) => {
    if (item.type === "video") {
      setVideoUrl(item.video_url);
      setVideoTitle(item.title);
    }
    if (item.type === "quiz") {
      setOpenQuiz(true);
    }
  };
  return (
    <Fragment>
      <div className="min-h-screen lg:pt-[20px]">
        <div className="m-auto flex w-full flex-col items-start justify-start  lg:w-[85%]  lg:flex-row lg:justify-between ">
          <div className="w-full lg:w-[60%]">
            <div className="aspect-video w-full  overflow-hidden md:rounded-[6px]  ">
              <ReactPlayer
                controls
                url={videoUrl}
                height={"100%"}
                width={"100%"}
              />
            </div>
            <div className="flex items-center justify-start py-3">
              <img
                src={videoSvg}
                className="ml-3 mr-3 w-[25px] md:ml-0 "
                alt="videoSvg"
              />{" "}
              <span className="text-[1.2rem]">{videoTitle}</span>
            </div>
          </div>
          <div className=" b_1 w-full rounded-md lg:w-[38%]">
            <div className="flex flex-wrap items-center justify-start pl-1 pt-1">
              <span className=" flex-none p-2">
                <img src={videoSvg} className="w-[25px]" alt="videoSvg" />{" "}
                Videos-25
              </span>
              <span className=" flex-none p-2">
                <img src={note} className="w-[25px]" alt="videoSvg" /> Notes-05
              </span>
              <span className=" flex-none p-2">
                <img src={question} className="w-[25px]" alt="videoSvg" />{" "}
                Quizes-04
              </span>
            </div>
            <ul className="b_1 rounded-md p-3 ">
              {videos.map((item) => (
                <li
                  className={`my-4 flex cursor-pointer items-center justify-start hover:text-[tomato] md:text-[1.1rem] ${
                    videoUrl === item.video_url ? "text-[tomato]" : ""
                  }`}
                  key={item.id}
                  onClick={() => handleClick(item)}
                >
                  <img
                    src={
                      item.type === "video"
                        ? videoSvg
                        : item.type === "note"
                          ? note
                          : question
                    }
                    className="mr-2 w-[25px]"
                    alt="note"
                  />
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <QuizBox open={openQuiz} setOpen={setOpenQuiz} />
    </Fragment>
  );
}

export default CourseVideos;
