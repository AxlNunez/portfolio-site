import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
   SiDotnet,
   SiVisualstudio,
   SiJquery,
   SiJavascript,
   SiReact,
   SiHtml5,
   SiCss3,
   SiBootstrap,
   SiCsharp,
   SiMicrosoftsqlserver,
   SiVisualstudiocode,
   SiPostman,
   SiTrello,
   SiYarn,
   SiGithub,
   SiGit,
} from "react-icons/si";
import values from "values.js";
import advDivLogo from "./images/advdiv.png";
import comingsoon from "./images/comingsoon.jpg";

const navLinks = [
   {
      name: "home",
      url: "#",
   },
   {
      name: "projects",
      url: "#projects",
   },
   {
      name: "contact",
      url: "#contact",
   },
];

const themes = [
   {
      name: "blue",
      color: "#2a93ec",
      clrValues: new values("#2a93ec").all(10),
   },
   {
      name: "darkpurple",
      color: "#7952b3",
      clrValues: new values("#7952b3").all(10),
   },
   {
      name: "pink",
      color: "#ff69b4",
      clrValues: new values("#ff69b4").all(10),
   },
   {
      name: "silvergrey",
      color: "#C0C0C0",
      clrValues: new values("#C0C0C0").all(10),
   },
];

const socials = [
   {
      name: "github",
      url: "https://github.com/AxlNunez/",
      icon: <FaGithub />,
   },
   {
      name: "linkedin",
      url: "https://linkedin.com/in/AxlNunez",
      icon: <FaLinkedinIn />,
   },
];

const languages = [
   {
      name: "c# (c sharp)",
      icon: <SiCsharp />,
      color: "#69227a",
      desc: "C# is a modern, object-oriented, and type-safe programming language that enables developers to build many types of secure and robust applications.",
   },
   {
      name: ".Net",
      icon: <SiDotnet />,
      color: "#69227a",
      desc: "JavaScript is commonly used for creating web pages. JavaScript helps us to execute complex actions and also enables the interaction of websites with visitors.",
   },
   {
      name: "Microsoft SQL Server",
      icon: <SiMicrosoftsqlserver />,
      color: "#fdfbfd",
      desc: "Microsoft SQL Server is a relational database management system developed by Microsoft that utilizes T-SQL.",
   },
   {
      name: "React",
      icon: <SiReact />,
      color: "#61DBFB",
      desc: "React is a JavaScript library for building modern applications. React is used for handling the view layer and can be used for development of both web and mobile applications.",
   },
   {
      name: "Javascript",
      icon: <SiJavascript />,
      color: "#f0db4f",
      desc: "JavaScript is commonly used for creating web pages. JavaScript helps us to execute complex actions and also enables the interaction of websites with visitors.",
   },
   {
      name: "jQuery",
      icon: <SiJquery />,
      color: "#0868ac",
      desc: "jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax.",
   },
   {
      name: "Bootstrap",
      icon: <SiBootstrap />,
      color: "#7d11f8",
      desc: "Bootstrap is an HTML, CSS & JS Library that focuses on simplifying the development of informative web pages",
   },
   {
      name: "HTML5",
      icon: <SiHtml5 />,
      color: "#e34c26",
      desc: "HTML (Hypertext Markup Language) is the code that is used to structure a web page and its content.",
   },
   {
      name: "CSS3",
      icon: <SiCss3 />,
      color: "#264de4",
      desc: "CSS (Cascading Style Sheets) is used to style and layout web pages",
   },
   {
      name: "Git",
      icon: <SiGit />,
      color: "#f34f29",
      desc: "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
   },
   {
      name: "Yarn",
      icon: <SiYarn />,
      color: "#2b8dba",
      desc: "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
   },
   {
      name: "Trello",
      icon: <SiTrello />,
      color: "#095dd8",
      desc: "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
   },
   {
      name: "GitHub",
      icon: <SiGithub />,
      color: "#ffffff",
      desc: "Github is a web-based platform used for version control. Git simplifies the process of working with other people and makes it easy to collaborate on projects.",
   },
   {
      name: "Postman",
      icon: <SiPostman />,
      color: "#ff6c37",
      desc: "Github is a web-based platform used for version control. Git simplifies the process of working with other people and makes it easy to collaborate on projects.",
   },
   {
      name: "Visual Studio",
      icon: <SiVisualstudio />,
      color: "#c194f4",
      desc: "Github is a web-based platform used for version control. Git simplifies the process of working with other people and makes it easy to collaborate on projects.",
   },
   {
      name: "VS Code",
      icon: <SiVisualstudiocode />,
      color: "#24abf2",
      desc: "Github is a web-based platform used for version control. Git simplifies the process of working with other people and makes it easy to collaborate on projects.",
   },
];

const projects = [
   {
      name: "Advancing Diversity",
      image: advDivLogo,
      github_url: "https://github.com/AxlNunez/AdvDiversity",
      site_url: "https://advancingdiversity.azurewebsites.net/",
      desc: "Advancing Diversity is an online platform connecting mentors and mentees with the objective to provide career advancement for underrepresented minorities in the US.",
      stack: [
         "c# (c sharp)",
         ".Net",
         "Microsoft SQL Server",
         "React",
         "Javascript",
         "Bootstrap",
      ],
      featured: true,
   },
   {
      name: "Top-Down Zombie Shooter Game",
      image: comingsoon,
      github_url: "https://github.com/AxlNunez/Csharp-ZombieShooter",
      site_url: "https://github.com/AxlNunez/Csharp-ZombieShooter",
      desc: "This game was created utilizing C# and Windows Forms. Movement is done utilizing your arrow keys, shooting is with the Space bar, and once dead you can restart the game using the Enter key.",
      stack: ["c# (c sharp)"],
      featured: false,
   },
   //   {
   //     name: "future project",
   //     image: somethingLogo,
   //     github_url: "https://github.com/AxlNunez/tbd",
   //     site_url: "https://tbd.com/",
   //     desc: "Enter interesting description here",
   //     stack: ["javascript", "react", "CSS3"],
   //     featured: false,
   //  },
];

export { navLinks, themes, socials, languages, projects };
