
export const skillsData: string[] = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Angular",
  "Redux",
  "Vite",
  "Tailwind",
  "MaterialUI",
  "Bootstrap",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Git",
  "Jira",
  "AWS",
  "Docker",
  "Figma",
  "Firebase",
  "Node.js",
  "Nest.js",
  "Express.js",
  "Sequelize",
  "TypeORM",
];

export const ProjectsData:{name:string,tools:string[],role:string,description:string}[] = [
  {
    name: "Blue Ocean Steel(BOS- Ecom Platform for steel materials)",
    tools: [
      "React",
      "MUI",
      "React Native",
      "Node.js",
      "Sequelize",
      "MySQL",
      "AWS",
      "Docker",
      "Jira",
      "node-mailer",
      "Figma",
    ],
    role: "Full Stack Developer",
    description:
      "BOS is a steel material e-commerce platform where suppliers sell steel, and customers can purchase materials. The platform also incorporates inventory management functionalities. \n" +
      "• Led the frontend development, designing the project architecture and building reusable components for a scalable application. \n" +
      "• Contributed to backend development by handling data modeling, creating APIs, and integrating third-party services to enhance platform functionality.",
  },
  {
    name: "Window Seat (Audio Content platform Project - for kids)",
    tools: ["React", "React-Native", "MUI", "Nestjs", "Typeorm", "MariaDB"],
    role: "Full Stack Developer",
    description:
      "• Engineered an audio content management platform akin to a kid-friendly music player, offering stories, podcasts & devotionals for children to enjoy. \n" +
      "• Spearheaded backend API development & authentication processes, ensuring secure access & seamless operation of platform features. \n" +
      "• Led the development of an authentication web app & implemented responsive UI designs to enhance user accessibility & interaction across devices. Additionally, contributed to mobile application development using React-Native.",
  },
  {
    name: "Heinekingmedia Gmbh (Whiteboard- School Modal Project)",
    tools: [
      "Angular",
      "Angular Material",
      "Fabricjs",
      "Node",
      "express",
      "socket.io",
      "Mysql",
    ],
    role: "Frontend Developer",
    description:
      "• Whiteboard is a canvas-based application utilized for collaborative teaching in educational institutions, serving as a crucial tool for both web & android devices. \n" +
      "• Specialized in canvas operations & collaboration functionalities, leading the implementation of real-time whiteboard collaboration features. \n" +
      "• Responsible for UI development, API integration, ensuring smooth communication between frontend & backend systems to enhance user interaction & functionality.",
  },
];

export const InternShipProjects:{name:string,tools:string[],role:string,description:string}[] = [
  {
    name: "Internship Program",
    tools: [
      "HTML5",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "React",
      "Nodejs",
      "express",
      "MongoDB",
      "GitHub",
    ],
    role: "Full Stack Developer (Intern)",
    description:
      "• Participated in a full stack developer internship at Edureka, contributing to various projects & gaining hands-on experience in web development. \n" +
      "• Assisted in the development of user-friendly interfaces, API integration, & database management tasks, gaining exposure to industry-standard. \n" +
      "• Applied technical skills & learned new technologies such as HTML5, CSS, JavaScript, Bootstrap, React, Nodejs, express, MongoDB, GitHub.",
  },
];

export const educationData: {
  title: string,
  college: string,
  percentage: string,
  duration: string,
}[] = [
  {
    title: "Bachelor of Engineering (Mechanical Engineering)",
    college: "Dr. DY Patil Pratishthan's College of Engineering, Kolhapur.",
    percentage: "75%",
    duration: "2017 - 2020",
  },
  {
    title: "Diploma in Mechanical Engineering",
    college:
      "Dr. Bapuji Salunkhe Institute Of Engineering and Technology, Kolhapur.",
    percentage: "64%",
    duration: "2015 - 2017",
  },
  {
    title: "Secondary School (HSC)",
    college: "Sou. SM Lohia Junior College, Kolhapur.",
    percentage: "56%",
    duration: "2014 - 2015",
  },
  {
    title: "Primary Education (SSC)",
    college: "New High School, Bachani.",
    percentage: "84%",
    duration: "2012 - 2013",
  },
];

export const particalsOptions = {
  background: { color: "transparent" },
  particles: {
    number: { value: 100, density: { enable: true, value_area: 1000 } },
    color: { value: ["#FF5733", "#FFC300", "#36D1DC", "#5B86E5"] },
    shape: { type: "circle" },
    opacity: { value: 0.7, random: true },
    size: { value: 4, random: true },
    move: {
      enable: true,
      speed: 2,
      direction: "top", 
      random: false,
      straight: false,
      out_mode: "out",
    },
    line_linked: { enable: false },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" },
    },
    modes: {
      repulse: { distance: 120, duration: 0.4 },
      push: { particles_nb: 4 },
    },
  },
};
