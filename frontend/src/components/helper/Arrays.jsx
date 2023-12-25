import computer from "../../assets/heroSvg/computer.svg";
import language from "../../assets/heroSvg/language.svg";
import monitor from "../../assets/heroSvg/monitor.svg";
import quran from "../../assets/heroSvg/quran.svg";
import time from "../../assets/illustration/time.jpg";
import course from "../../assets/illustration/course.jpg";
import notes from "../../assets/illustration/notes.jpg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const heroOptions = [
  { svg: quran, icon: <KeyboardArrowRightIcon />, title: "Quran" },
  { svg: monitor, icon: <KeyboardArrowRightIcon />, title: "HSC ICT" },
  { svg: language, icon: <KeyboardArrowRightIcon />, title: "HSC English" },
  { svg: computer, icon: <KeyboardArrowRightIcon />, title: "Computer" },
];
export const loginIllustration = [
  { svg: notes, text: "Download Our Free Notes" },
  { svg: time, text: "Learn Your Own Time" },
  { svg: course, text: "Find The Best Courses" },
];
