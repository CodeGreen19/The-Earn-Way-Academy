import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import reviews from "../../assets/svg/reviews.svg";
import quote from "../../assets/svg/quote.svg";

function Testimonials() {
  const cards = ["", "", "", "", "", ""];
  return (
    <div className="my-[20px] lg:my-[100px]">
      <div className="flex flex-col items-center justify-center">
        <h4 className="flex items-end">
          <img src={reviews} className="w-[40px]" alt="review svg" />
          <span className="ls_1 ml-2 text-[tomato]">TESTIMONIALS</span>
        </h4>
        <h2 className="my-2 text-[1.5rem] lg:text-[2.2rem]">
          Our Student's Reviews
        </h2>
      </div>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots w-[98%] lg:w-[80%] py-[30px] m-auto "
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
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {cards.map(() => (
          <div className=" b_1 testmonianls_box relative m-auto w-[98%] rounded bg-white p-2 ">
            <span className="absolute -left-0 -top-3 rounded-full bg-white ">
              <img className="w-[20px]" src={quote} alt="quote" />
            </span>
            <p className="testimonial_text">
              অনেকদিন ধরেই ভাবছিলাম কোরআন শেখার তবে সময় ও সুযোগ হয়ে উঠছিল না
              তারপরে হঠাৎ ইউটিউবে কোরআন শিখার অনলাইন কোর্সের খবর জানতে পারি এবং
              পরপরই The Earn Way Academy থেকে কোরআন শিক্ষার কোর্সটি কিনে ফেলি
              আমার তিন মাস সময় লাগে তবে এখন আমি শুদ্ধ সাবলীল ভাষায় কোরআন পড়তে
              পারি
            </p>
            <h2 className="mt-4 text-[1.2rem]">Naymur Rahman,</h2>
            <h2 className="text-[gray]">Students, Brac University</h2>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Testimonials;
