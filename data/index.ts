import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#education" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Skilled in problem-solving and delivering efficient solutions. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start",
    img: "/laptop.jpeg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Continuous Learner",
    description: "I'm Adaptable to new technologies and tools.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/growth.jpg",
    spareImg: "",
  },
  {
    id: 3,
    title: "Strategic and Organized",
    description: "I manage my time and tasks effectively to maintain project momentum.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 4,
    title: "Dedicated",
    description: "I am committed to delivering exceptional results and exceeding client expectations.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 5,
    title: "I'm a Passionate Full Stack Developer",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 sm:w-40 w-20",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/webdev.svg",
    spareImg: "",
  },
  {
    id: 6,
    title: "Ready to collaborate on a new project with me ?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Visiona - AI Powered Image Processing Platform",
    des: "Perform Magical Transformations on Photos like Image expansion , Background removal , Object Removal , etc",
    img: "/projects/visiona.png",
    iconLists: ["/skill/next.svg", "/skill/reactjs.svg", "/skill/mongodb.svg", "/skill/typescript.svg", "/tail.svg", "/projects/cloudinary.svg", "/c.svg"],
    link: "https://visiona-theta.vercel.app",
    github: "https://github.com/ChaitanyaRawat/visiona"
  },
  {
    id: 2,
    title: "Careersync - Job Application and Hiring Platform",
    des: "Create Post and Detaied Professional Profile, Highlight Achievements, apply for desired roles and hire bright minds for your organization.",
    img: "/projects/careersync.png",
    iconLists: ["/skill/next.svg", "/skill/reactjs.svg", "/skill/mongodb.svg", "/skill/typescript.svg", "/tail.svg", "/c.svg"],
    link: "https://careersync-tau.vercel.app",
    github: "https://github.com/ChaitanyaRawat/careersync"
  },

];






export const socialMedia = [
  {
    id: 1,
    img: "/contact/github.svg",
    link: "https://github.com/ChaitanyaRawat",
  },
  {
    id: 2,
    img: "/contact/linkedin.svg",
    link: "https://www.linkedin.com/in/cr7tech"
  },
  {
    id: 3,
    img: "/contact/whatsapp.svg",
    link: "https://wa.me/+918586010743"
  },
];

export const skill = [
  {
    id: 1,
    name: "Next.js",

    image:
      "/skill/next.svg",
  },
  {
    id: 2,
    name: "React.js",

    image:
      "/skill/reactjs.svg",
  },
  {
    id: 3,
    name: "MongoDB",

    image:
      "/skill/mongodb.svg",
  },
  {
    id: 4,
    name: "Node.js",

    image:
      "/skill/nodejs.svg",
  },
  {
    id: 5,
    name: "Typescript",

    image:
      "/skill/typescript.svg",
  },
  {
    id: 6,
    name: "Tailwind CSS",
    image:
      "/skill/tailwind.svg",
  },
];


export const skillset = [
  {
    id: 1,
    name: "Full Stack Web Development",

 
    image:
      "/skillset-techstack/fullstack.webp",
  },
  {
    id: 2,
    name: "Next.js",

 
    image:
      "/skillset-techstack/nextjs.png",
  },

  {
    id: 3,
    name: "React.js",

 
    image:
      "/skillset-techstack/react.jpg",
  },
  {
    id: 4,
    name: "MongoDB",

 
    image:
      "/skillset-techstack/mongodb.jpg",
  },
  {
    id: 5,
    name: "Typescript and Javascript",

 
    image:
      "/skillset-techstack/typescript-javascript.jpg",
  },
  {
    id: 6,
    name: "Tailwind CSS",

 
    image:
      "/skillset-techstack/tailwind.jpg",
  },
  {
    id: 7,
    name: "Java",

 
    image:
      "/skillset-techstack/java.jpg",
  },


]