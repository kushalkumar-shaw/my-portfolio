import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";
const Info = {
  name: "Kushalkumar Shaw",
  stack: [
    "Software Engineer",
    "Full Stack Developer",
    "Competitive Programmer",
    "Open Source Contributor",
  ],
  bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, deliver top-notch web applications, and provide freelance services that exceed client expectations. Let's connect and create something amazing together!",
};

const ProjectInfo = [
  {
    title: "Expense Tracker",
    desc: "Our Expense Tracker app, crafted with React and Next.js, offers a streamlined solution for managing personal finances. Using server-side rendering (SSR), the app ensures rapid load times and improved SEO, providing users with a smooth and efficient experience.The app allows users to easily add both expenses and income, thanks to its intuitive form where they can input transaction details such as amount, category, and description. As users log their financial activities, the app dynamically updates and displays their current balance, giving a clear overview of their financial status at any time. With Bootstrap's responsive design, the app adapts seamlessly to different devices, ensuring usability on desktops, tablets, and smartphones. Overall, the Expense Tracker app simplifies financial management, helping users stay organized and on top of their financial goals.",
    image:
      "https://raw.githubusercontent.com/kushalkumar-shaw/Expense-Tracker-App/main/public/landing%20page.png",
    live: true,
    technologies: ["React", "Next.js", "Bootstrap"],
    link: "https://ks-expense-tracker-app.vercel.app/",
    github: "https://github.com/kushalkumar-shaw/Expense-Tracker-App",
  },
];

const SkillInfo = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "React JS",
      "Next Js",
      "Redux",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node JS",
      "Express JS",
      "MySQL",
      "MongoDB",
      "Firebase",
      "PostgresSQL",
    ],
  },
  {
    title: "Languages",
    skills: ["C", "C++", "JavaScript", "TypeScript"],
  },
  {
    title: "Tools",
    skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass"],
  },
];
const socialLinks = [
  { link: "https://github.com/kushalkumar-shaw", icon: IconBrandGithub },
  {
    link: "https://www.linkedin.com/in/kushalkumarshaw/",
    icon: IconBrandLinkedin,
  },
  {
    link: "https://www.instagram.com/kushalkumar_shaw/",
    icon: IconBrandInstagram,
  },
  {
    link: "https://www.youtube.com/@kushal-shaw",
    icon: IconBrandYoutube,
  },
  { link: "https://leetcode.com/u/kushalkumarshaw/", icon: IconBrandLeetcode },
];

const ExperienceInfo = [
  {
    role: "Junior Web Developer",
    company: "Wipro",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/330px-Wipro_Primary_Logo_Color_RGB.svg.png",
    date: "Jul 2023 - Jan 2024",
    desc: "I led software development with Spring Boot, React, and Angular, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
    skills: [
      "Springboot",
      "React JS",
      "Angular",
      "Node JS",
      "MySQL",
      "MongoDB",
      "Microservices",
    ],
  },
];

export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo };
