import Jobs from "@/public/images/jobs.svg";
import JobsWhite from "@/public/images/jobs-white.svg";
import Mentorship from "@/public/images/mentorship.svg";
import MentorshipWhite from "@/public/images/mentorship-white.svg";
import Trainings from "@/public/images/trainings.svg";
import TrainingsWhite from "@/public/images/trainings-white.svg";
import Candidate from "@/public/images/candidate.svg";
import Employer from "@/public/images/employer.svg";
import Mentor from "@/public/images/mentor.svg";
import Trainer from "@/public/images/trainer.svg";
import Education from "@/public/images/education.svg";
import EducationLight from "@/public/images/educationLight.svg";
import WorkExperience from "@/public/images/workexperience.svg";
import InterestSkills from "@/public/images/interestandskills.svg";
import Certification from "@/public/images/certifications.svg";
import Accomplishments from "@/public/images/accomplishments.svg";
import Upload from "@/public/images/upload.svg";

export const NavSwitchLinks = [
  { id: 1, name: "For Students and Graduates", link: "/" },
  { id: 2, name: "For Partners", link: "/partners" },
];
export const FormSwitchLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 3, name: "Sign-Up", link: "/sign-up" },
  { id: 2, name: "Sign-In", link: "/sign-in" },
];
export const SecondarySwitchLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Jobs", link: "/jobs" },
  { id: 3, name: "Mentorship", link: "/mentorship" },
  { id: 4, name: "Trainings", link: "/trainings" },
  { id: 4, name: "Partners", link: "/partners" },
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

export const CareerType = [
  { id: 1, value: "Still in school", name: "Still in school" },
  {
    id: 2,
    value: "Currently doing National Service",
    name: "Currently doing National Service",
  },
  {
    id: 3,
    value: "Done with National Service",
    name: "Done with National Service",
  },
  {
    id: 4,
    value: "Experienced Professional",
    name: "Experienced Professional",
  },
];
export const AccountType = [
  {
    id: 1,
    value: "Candidate",
    imageUsed: Candidate,
    description: "A graduate looking for an employment opportunity",
    comingSoon: "Coming soon",
  },
  {
    id: 2,
    value: "Employer",
    imageUsed: Employer,
    description: "A graduate, trainee or mentee looking top talents",
    comingSoon: "Coming soon",
  },
];
export const AccountType2 = [
  {
    id: 1,
    value: "Mentor",
    imageUsed: Mentor,
    description: "A professional helping others navigate their careers",
    comingSoon: "Coming soon",
  },
  {
    id: 2,
    value: "Trainer",
    imageUsed: Trainer,
    description: "An organisation offering training programmes",
    comingSoon: "Coming soon",
  },
];

//
export const Profiletabs = [
  {
    id: 1,
    icon: Education,
    title: "Education",
    modalType: "formEdu",
    description: "School info, field of study",
  },
  {
    id: 2,
    icon: WorkExperience,
    title: "Work Experience",
    modalType: "formWork",
    description: "Where you've worked,your role",
  },
  {
    id: 3,
    icon: InterestSkills,
    title: "Interests and skills",
    modalType: "",
    description: "Career interests and skillset",
  },
  {
    id: 4,
    icon: Certification,
    title: "Certifications",
    modalType: "",
    description: "Certifications worth highlighting",
  },
  {
    id: 5,
    icon: Accomplishments,
    title: "Accomplishments",
    modalType: "",
    description: "Personal achievements & impact",
  },
  {
    id: 6,
    icon: Upload,
    title: "Upload Resume",
    modalType: "resumeUpload",
    description: "CV, portfolio",
  },
];

export { EducationLight };

export const ProfileStatus = [
  { id: 1, value: "Education" },
  { id: 2, value: "Work Experience" },
  { id: 3, value: "Interests & Skills" },
  { id: 4, value: "Certificationss" },
  { id: 5, value: "Accomplishments" },
  { id: 6, value: "Upload Resume" },
];
