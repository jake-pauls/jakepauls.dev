/* Links */
export const Links = {
  GITHUB: "https://github.com/jake-pauls/",
  LINKEDIN: "https://www.linkedin.com/in/jake-pauls/",
  EMAIL: "mailto:jakepauls99@gmail.com",
  TWITTER: "https://twitter.com/jackjakejacob",
  ITCH: "https://jake-pauls.itch.io/",
  MEDIUM: "https://jake-pauls.medium.com/",
  RESUME:
    "https://drive.google.com/file/d/1pihMXt1kvm6Jx1lGKGVx1Ks737PhKKzP/view?usp=sharing",
  REACT: "https://reactjs.org/",
  GOLANG: "https://golang.org/",
  WEBSITE_REPO: "https://github.com/jake-pauls/jakepauls.dev",
  DOTFILES_REPO: "https://github.com/jake-pauls/.dotfiles",
  ARCH: "https://archlinux.org/",
  NVIM: "https://neovim.io/",
  BCIT_PROGRAM:
    "https://www.bcit.ca/programs/computer-systems-games-development-option-bachelor-of-technology-full-time-862bbtech/#overview",
};

/* API URL */
export const GOPHER_HEROKU_URL = "https://reactive-gopher.herokuapp.com";
export const getGopherBaseUrl = (): string => {
  let baseUrl = "";

  if (import.meta.env["NODE_ENV"] === "production") {
    baseUrl = GOPHER_HEROKU_URL;
  }

  return baseUrl;
};

/* Error Message */
export const ERROR_MESSAGE =
  "Well. This is awkward. Looks like we can't connect to the API. 🥺";

/* Projects */
export const projects = [
  {
    title: "FrostFire",
    description:
      "Top-down multiplayer survival defense game where players work to defend and replenish a diminishing campfire from enraged snowmen. Contributed to Unity frontend including UI/UX, player management, and visual effects.",
    date: "December 2021",
    category: "Game",
    tech: ["C#", "Unity", "HLSL"],
    ghLink: "https://github.com/paulc100/FrostFire",
    projLink: "",
    video: "https://youtu.be/USLnmfNqFdk",
  },
  {
    title: "Babble",
    description:
      "Web application hosting video calls and synchronous text-editing for pair programming sessions.",
    date: "June 2021",
    category: "Hackathon",
    tech: ["Vue", "TailwindCSS", "PeerJS", "JavaScript", "Firebase"],
    ghLink: "https://github.com/jake-pauls/babble",
    projLink: "https://letsbabble.tech",
    video: "",
  },
  {
    title: "PunkGauth",
    description:
      "Runner-up Most Technically Impressive @ UncommonHacks 2021 ✨ Hypothesis for enabling artists to democratize their revenues from album and single sales through cryptocurrency authentication based on Ethereum and NFTs.",
    date: "April 2021",
    category: "Hackathon",
    tech: ["Vue", "TypeScript", "Python", "Solidity"],
    ghLink: "https://github.com/jake-pauls/PunkGauth",
    projLink: "",
    video: "",
  },
  {
    title: "The Phantom Blade",
    description:
      "Proof of concept for a Metroidvania-style game built in Unity. Contributed to the player and AI controllers, physics, and ability systems. Built a multi-phased final boss battle with custom abilities.",
    date: "March 2021",
    category: "Game",
    tech: ["C#", "Unity"],
    ghLink: "https://github.com/jake-pauls/phantom-blade",
    projLink: "https://tpbstudios.itch.io/the-phantom-blade",
    video: "https://youtu.be/C9kMpJgolaA",
  },
  {
    title: "InterviewBuddy.online",
    description:
      "2nd Place Overall @ StormHacks 2021 🤖 Web application that provisions peer-to-peer or AI mock interviews online.",
    date: "February 2021",
    category: "Hackathon",
    tech: ["React", "Python", "Flask", "Google Cloud"],
    ghLink: "https://github.com/siddg97/stormhacks2021",
    projLink: "",
    video: "",
  },
  {
    title: "EduGlobe",
    description:
      "3rd Place Overall and Best Presentation @ CUNY Hackathon 2021 🌏 Web application that provides 3D visualizatons of COVID-19 and earthquake data using three.js.",
    date: "January 2021",
    category: "Hackathon",
    tech: ["JavaScript", "three.js", "Netlify"],
    ghLink: "https://github.com/jake-pauls/EduGlobe",
    projLink: "https://eduglobe.space",
    video: "",
  },
  {
    title: "UHDA",
    description:
      "Help desk ticketing webapp built in Java using SpringBoot, also featured a Slack integration built in Python. ",
    date: "December 2020",
    category: "Project",
    tech: ["Java", "SpringBoot", "Python", "Heroku"],
    ghLink: "https://github.com/jake-pauls/Untitled_UHDA_Project",
    projLink: "",
    video: "",
  },
  {
    title: "gasTRAK",
    description:
      "Android app that tracks user gas data and allows them to create trips to local gas stations.",
    date: "December 2019",
    category: "Project",
    tech: ["Java", "Google Cloud", "AWS", "Firebase", "MySQL"],
    ghLink: "https://github.com/jake-pauls/gasTRAK",
    projLink: "",
    video: "",
  },
];
