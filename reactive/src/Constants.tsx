import gtImg from "../public/images/project_gt.png";
import uhdaImg from "../public/images/project_uhda.png";
import egImg from "../public/images/project_eg.png";
import ibImg from "../public/images/project_ib.png";
import tpbImg from "../public/images/project_tpb.png";
import pgImg from "../public/images/project_pg.png";

/* Links */
export const Links = {
    GITHUB: "https://github.com/jacob-pauls/",
    LINKEDIN: "https://www.linkedin.com/in/jacobpauls/",
    EMAIL: "mailto:jakepauls99@gmail.com",
    TWITTER: "https://twitter.com/jackjakejacob",
    ITCH: "https://jake-pauls.itch.io/",
    RESUME: "https://drive.google.com/file/d/1m_u06Cs8JCTLuxQH7yPvbdiT_zJQEYcf/view?usp=sharing",
    REACT: "https://reactjs.org/",
    GOLANG: "https://golang.org/",
    WEBSITE_REPO: "https://github.com/jacob-pauls/jakepauls.dev",
    DOTFILES_REPO: "https://github.com/jacob-pauls/.dotfiles",
    ARCH: "https://archlinux.org/",
    NVIM: "https://neovim.io/",
    PT: "https://www.facebook.com/Pink4Thursdays",
    BCIT_PROGRAM: "https://www.bcit.ca/programs/computer-systems-games-development-option-bachelor-of-technology-full-time-862bbtech/#overview",
};

/* Error Message */
export const ERROR_MESSAGE = "Well. This is awkward. Looks like we can't connect to the API. 🥺"

/* Projects */
export const projects = [
    {
        title: "PunkGauth",
        description: "Hypothesis for enabling artists to democratize their revenues from album and single sales through cryptocurrency authentication based on Ethereum and NFTs.",
        date: "April 2021",
        category: "Hackathon",
        tech: ["Vue", "TypeScript", "Python", "Solidity"],
        ghLink: "https://github.com/jacob-pauls/PunkGauth",
        projLink: "",
        image: pgImg,
    },
    {
        title: "The Phantom Blade",
        description: "Proof of concept for a Metroidvania-style game built in Unity. Contributed to the player and AI controllers, physics, and ability systems. Built a multi-phased final boss battle with custom abilities.",
        date: "March 2021",
        category: "Game Jam",
        tech: ["C#", "Unity"],
        ghLink: "https://github.com/jacob-pauls/phantom-blade",
        projLink: "https://tpbstudios.itch.io/the-phantom-blade",
        image: tpbImg,
    },
    {
        title: "InterviewBuddy.online",
        description: "Web application that provisions peer-to-peer or AI mock interviews online.",
        date: "February 2021",
        category: "Hackathon",
        tech: ["React", "Python", "Flask", "Google Cloud"],
        ghLink: "https://github.com/siddg97/stormhacks2021",
        projLink: "",
        image: ibImg,
    },
    {
        title: "EduGlobe",
        description: "🌏 Web application that provides 3D visualizatons of COVID-19 and earthquake data using three.js. 🌏",
        date: "January 2021",
        category: "Hackathon",
        tech: ["JavaScript", "three.js", "Netlify"],
        ghLink: "https://github.com/jacob-pauls/EduGlobe",
        projLink: "https://eduglobe.space",
        image: egImg,
    },
    {
        title: "UHDA",
        description: "Help desk ticketing webapp built in Java using SpringBoot, also featured a Slack integration built in Python. ",
        date: "December 2020",
        category: "Project",
        tech: ["Java", "SpringBoot", "Python"],
        ghLink: "https://github.com/jacob-pauls/Untitled_UHDA_Project",
        projLink: "",
        image: uhdaImg,
    },
    {
        title: "gasTRAK",
        description: "Android app that tracks user gas data and allows them to create trips to local gas stations.",
        date: "December 2019",
        category: "Project",
        tech: ["Java", "Google Cloud", "AWS", "Firebase", "MySQL"],
        ghLink: "https://github.com/jacob-pauls/gasTRAK",
        projLink: "",
        image: gtImg,
    },
];
