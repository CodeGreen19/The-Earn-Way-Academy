import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import quran from "../../assets/card/quran.jpg";
import ms from "../../assets/card/ms.webp";
import ict from "../../assets/card/ict.jpeg";

export const BenefitsArr = [
  { name: "Skill Lavel", icon: <DownhillSkiingIcon />, ans: "Beginner" },
  { name: "Time to Complete", icon: <AccessTimeIcon />, ans: "4/5 months" },
  { name: "Government Certificate", icon: <EmojiEventsIcon />, ans: "Yes" },
  { name: "Prerequsites", icon: <PlaylistPlayIcon />, ans: "None" },
];

export const Courses = [
  "Courses",
  "MS Word",
  "MS Excel",
  "MS Powerpoint",
  "Quran",
  "HSC English",
  "HSC Ict",
];

export const videoUrlArr = [
  { video_id: "8ai9jOuG_qM", type: "videoId" },
  { video_id: "8ai9jOuG_qM", type: "videoId" },
];

export const cardImages = [{ url: quran }, { url: ms }, { url: ict }];
