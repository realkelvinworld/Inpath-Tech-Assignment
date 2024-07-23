import Jobs from "@/public/images/jobs.svg";
import JobsWhite from "@/public/images/jobs-white.svg";
import Mentorship from "@/public/images/mentorship.svg";
import MentorshipWhite from "@/public/images/mentorship-white.svg";
import Trainings from "@/public/images/trainings.svg";
import TrainingsWhite from "@/public/images/trainings-white.svg";

export const NavSwitchLinks = [
  { id: 1, name: "For Students and Graduates", link: "/" },
  { id: 2, name: "For Partners", link: "/about" },
];

export const Navlinks = [
  {
    id: 1,
    name: "Jobs",
    link: "/jobs",
    icon1: Jobs,
    icon2: JobsWhite,
  },
  {
    id: 2,
    name: "Mentorship",
    link: "/mentorship",
    icon1: Mentorship,
    icon2: MentorshipWhite,
  },
  {
    id: 3,
    name: "Trainings",
    link: "/trainings",
    icon1: Trainings,
    icon2: TrainingsWhite,
  },
];
