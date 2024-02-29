import {
  github,
  linkedin,
  avazImg,
  cakinImg,
  skylarImg,
  jessImg,
} from "../assets";
import { TeamDataProps } from "../types/typings";

export const TeamData: TeamDataProps[] = [
  {
    id: "feedback-1",
    content:
      "I am a passionate programmer driven by a love for problem-solving and creativity. I dive into coding because it allows me to bring ideas to life and make a tangible impact in the digital world.",
    name: "Anthony Cakin",
    title: "Frontend Developer",
    img: cakinImg,
    flag: "🇺🇸",
    iconGithub: github,
    iconLinkedin: linkedin,
    githubLink: "https://github.com/Cakinn1",
    linkedinLink: "https://www.linkedin.com/in/anthony-cakin/",
  },
  {
    id: "feedback-2",
    content:
      "I am a person who is passionate about problem solving and ready to commit to my team. I like to provide high-quality services through coding. In a world of ever-changing world, a new language is always welcome.",
    name: "Skylar Park",
    title: "Frontend Developer",
    img: skylarImg,
    flag: "🇨🇦",
    iconGithub: github,
    iconLinkedin: linkedin,
    githubLink: "https://github.com/MinjuSkylarPark",
    linkedinLink: "https://www.linkedin.com/in/skylar-park-a407aa22a/",
  },
  {
    id: "feedback-3",
    content:
      "I am dedicated to solving problems and envisioning a brighter future for both today's and future generations through the development of high-quality software solutions.",
    name: "Avazbek",
    title: "Frontend Developer",
    img: avazImg,
    flag: "🇬🇧",
    iconGithub: github,
    iconLinkedin: linkedin,
    githubLink: "https://github.com/devavaz",
    linkedinLink: "https://www.linkedin.com/in/avazbeks/",
  },
  {
    id: "feedback-4",
    content:
      "I enjoy coding because it's fun to think of something and then create it. It's fun to puzzle out logic, like a riddle. Let's create something amazing together!             ",
    name: "Jess",
    title: "Frontend Developer",
    img: jessImg,
    flag: "🇺🇸",
    iconGithub: github,
    iconLinkedin: linkedin,
    githubLink: "https://github.com/jessabc",
    linkedinLink: "https://www.linkedin.com/in/jessica-b-0b1b9b1b2/",
  },
];
