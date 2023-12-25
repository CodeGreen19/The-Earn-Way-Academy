import React from "react";
import Hero from "./Hero";
import Course from "./Course";
import TopCourse from "./TopCourse";
import Testimonials from "./Testimonials";
import "../style/Home.css";

function Home() {
  return (
    <div>
      <Hero />
      <TopCourse />
      <Course />
      <Testimonials />
    </div>
  );
}

export default Home;
