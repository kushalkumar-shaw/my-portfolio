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
  {
    title: "SnapLink",
    desc: "SnapLink is a robust URL shortening application built with Next.js, designed to streamline the process of transforming long URLs into concise, shareable links. It features seamless integration with the TinyURL API, allowing users to generate shortened URLs effortlessly. The application boasts a mobile-first, responsive design to ensure an optimal user experience across devices, and is optimized with server-side rendering for fast, lightweight performance. Additionally, SnapLink simplifies setup with a straightforward installation process, making it easy for developers to deploy and use.",
    image:
      "https://raw.githubusercontent.com/kushalkumar-shaw/snap-link/main/public/Landing%20page.png",
    live: true,
    technologies: ["Next.js", "TinyURL API", "JavaScript", "Node.js", "npm/Yarn"],
    link: "https://ks-snap-link.vercel.app/",
    github: "https://github.com/kushalkumar-shaw/snap-link",
  },
];

const skillsData = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "NextJS",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Git",
  "AWS",
  "Bootstrap",
  "Docker",
  "Go",
  "Figma",
  "Firebase",
  "MaterialUI",
  "Nginx",
  "Strapi",
];

// AVAILABLE SKILLS

/* 
  HTML
  CSS
  JS 
  React
  Next JS
  Nuxt JS
  Node JS
  Vue
  Angular
  Docker
  Photoshop
  Illustrator
  Svelte
  GCP
  Azure
  Fastify
  Haxe
  Ionic
  Markdown
  Microsoft Office
  Picsart
  Sketch
  Unity
  WolframAlpha
  Adobe XD
  After Effects
  Bootstrap
  Bulma
  CapacitorJs
  Coffeescript
  MemSQL
  C
  C++
  C#
  Python
  Java
  Julia
  Matlab
  Swift
  Ruby
  Kotlin
  Go
  PHP
  Flutter
  Dart
  Typescript
  Swift
  Git
  Figma
  Canva
  Ubuntu
  Bootstrap
  MongoDB
  Tailwind
  ViteJS
  VuetifyJS
  MySQL
  PostgreSQL
  AWS
  Firebase
  Blender
  Premiere Pro
  Adobe Audition
  Deno
  Django
  Gimp
  Graphql
  Lightroom
  MaterialUI
  Nginx
  Numpy
  OpenCV
  Pytorch
  Selenium
  Strapi
  Tensorflow
  Webex
  Wordpress
*/

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
      "HTML/CSS",
      "Javascript",
      "Typescript",
      "React",
      "Node,js",
      "Express.js",
      "RestFull API's",
      "MongoDB",
    ],
  },
];

export const EducationInfo = [
  {
    id: 0,
    img: "gkv.jpg",
    school: "Gurukul Kangri Faculty of Engineering and Technology",
    date: "August 2024 - April 2028",
    desc: "I am currently pursuing a Bachelor of Technology in Computer Science and Engineering at Gurukul Kangri Faculty of Engineering and Technology. With a strong foundation in software development, data structures, and algorithms, I am passionate about building scalable and efficient solutions. My academic journey has equipped me with skills in full-stack development, cloud computing, and emerging technologies. I am eager to apply my knowledge to real-world challenges and continuously enhance my expertise in the field of computer science.",
    degree: "Bachelor of Technology - Computer Science and Engineering"
  },
  {
    id: 1,
    img: "iitm.png",
    school: "Indian Institute of Technology Madras",
    date: "May 2023 - April 2027",
    desc: "I am currently pursuing a Bachelor of Science in Data Science and Programming at the Indian Institute of Technology Madras. With a strong foundation in data analysis, statistical modeling, and programming, I am passionate about leveraging data to drive impactful solutions. My academic journey has equipped me with skills in Python, R, machine learning, and big data technologies. I am eager to apply my knowledge to real-world challenges and continue learning in the dynamic field of data science.",
    degree: "Bachelor of Science - Data Science and Programming",
  },
  {
    id: 2,
    img: "spdc.png",
    school: "Satish Pradhan Dnyanasadhana College",
    date: "May 2021 - Apr 2023",
    desc: "I completed my class 12 education at Satish Pradhan Dnyanasadhana College, Thane where I studied Science with Information Technology.",
    degree: "Higher Secondary Certificate (Class 12)",
  },
  {
    id: 3,
    img: "evershine.png",
    school: "Evershine English School",
    date: "May 2011 - Apr 2021",
    desc: "I completed my class 110 education at Evershine English School, Kalher where I studied Science with Computer Application.",
    degree: "Secondary School Certificate (Class 10)",
  },
];

export { Info, ProjectInfo, socialLinks, skillsData, ExperienceInfo };
