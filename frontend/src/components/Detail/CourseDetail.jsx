import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import list from "../../assets/svg/list.svg";
import listBook from "../../assets/svg/list_book.svg";
import circle_list from "../../assets/svg/success.svg";
import Headline from "../helper/Headline";
import { useNavigate } from "react-router-dom";
import tew from "../../assets/image/tew.jpg";

function CourseDetail() {
  const navigate = useNavigate();
  const learn = [
    "স্মার্টলি কমিউনিকেট করার প্রয়োজনীয় স্কিলস",
    "ফোন কল এবং অনলাইন মিটিং এর মাধ্যমে প্রফেশনাল কমিউনিকেশন",
    "কর্মক্ষেত্রে সহকর্মীদের সাথে কমিউনিকেট করার সঠিক পদ্বতি",
    "হাই-প্রোফাইল মানুষদের সাথে নেটওয়ার্কিং এর কৌশল",
    "পাবলিক স্পিকিং এর জন্য কার্যকরী টিপস এন্ড ট্রিকস",
    "সোশ্যাল মিডিয়াতে সঠিকভাবে যোগাযোগ করার পদ্ধতি",
    "চাকরির ইন্টারভিউতে কমিউনিকেট করার কৌশল",
    "ব্যক্তিগত এবং সামাজিক জীবনে প্রয়োজনীয় যোগাযোগ কৌশল",
  ];
  const certificate = [
    "আপনার সিভিতে যোগ করতে পারবেন",
    "লিংকডইন প্রোফাইলে সরাসরি শেয়ার করতে পারবেন",
    "ফেসবুকে এক ক্লিকেই শেয়ার করতে পারবেন",
  ];
  let videoItems = [
    "কোর্সটি করছেন ৬৪৮২ জন",
    "সময় লাগবে ৭ ঘন্টা",
    "২৮টি ভিডিও",
    "৯ সেট কুইজ",
    "৩০টি নোট",
    "সময়সীমা ৬ মাস",
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="m-auto flex flex-col-reverse lg:w-[80%] lg:flex-row">
      <div className=" m-1   pt-6 md:m-0 md:pr-3 md:pt-0 ">
        <Headline text={"কোর্স ইন্সট্রাক্টর"} side={"start"} />
        <div className="b_1 ">
          <div>
            <div className="aspect-[1/1] w-[100px] overflow-hidden rounded-sm">
              <img
                className="w-full"
                src={
                  "	https://cdn.10minuteschool.com/images/skills/instructors/tahsan-khan-onset.jpg"
                }
                alt="instractor_images"
              />
            </div>
            <div className="px-1 py-2">
              <h1 className="text-[1.2rem]">Tashref Khan</h1>
              <p>
                Singer, Musician, Actor & Teacher Former <br /> Faculty Member,
                BRAC University & ULAB
              </p>
            </div>
          </div>
        </div>
        <Headline text={"কোর্সটি করে যা শিখবেন"} side={"end"} />
        <ul className="b_1 rounded p-3 ">
          {learn.map((item) => (
            <li className="my-4  flex items-center">
              <img src={listBook} className="mr-3 w-[22px]" alt="listBook" />{" "}
              {item}
            </li>
          ))}
        </ul>

        <Headline text={"কোর্স সার্টিফিকেট"} side={"start"} />
        <div className="b_1 rounded p-3">
          <h2>কোর্সটি সফলভাবে শেষ করলে আপনার জন্য আছে সার্টিফিকেট যা আপনি-</h2>
          <ul className="pl-3">
            {certificate.map((item) => (
              <li className="my-4  flex items-center text-[0.9rem]">
                <img
                  src={circle_list}
                  className="mr-3 w-[22px]"
                  alt="listBook"
                />{" "}
                {item}
              </li>
            ))}
          </ul>
          <img
            className="b_1 m-1 w-full rounded"
            // src="	https://cdn.10minuteschool.com/communication-masterclass-by-tahsan-khan-certificate.png"
            src={tew}
            alt="cirtificate "
          />
        </div>
        <div className="b_1 my-3 rounded p-6 text-[0.9rem] text-[tomato]">
          কোন জিজ্ঞাসা আছে? কল করুন :{" "}
          <span className="text-[1.1rem] text-[green]"> 01870425052</span>
        </div>
      </div>
      <div>
        <div className="detail_card b_1 sticky top-[100px] z-10 m-auto mb-5 mt-[20px] w-[96vw] overflow-hidden rounded-[5px] md:w-[400px]  lg:sticky lg:right-[10%]">
          <div className="aspect-video w-full ">
            <ReactPlayer
              height="100%"
              width="100%"
              url="https://www.youtube.com/watch?v=x39RLWahCII&t=3s"
              controls
            />
          </div>
          <div className="bg-[white] p-3">
            <ul>
              {videoItems.map((item) => (
                <li className="my-1 flex items-center text-[0.9rem]">
                  <img src={list} className="mr-1 w-[25px]" alt="listImg" />
                  {item}
                </li>
              ))}
            </ul>
            <div className=" mt-3 flex items-center justify-between">
              <div className="">
                <span className=" h-full  rounded  text-[1.3rem] font-bold text-[tomato]">
                  1200 &#2547;
                </span>
              </div>
              <button
                onClick={() => navigate("/course/payment")}
                className="b_1 rounded bg-[green] p-3 py-2 text-[white]"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
