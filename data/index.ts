import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Explore", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I build immersive AR/VR & web experiences with clear communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/x3.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible with timelines and easy to collaborate with",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My core tech stack",
    description: "Always learning & upgrading",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "BCA student • AR/VR • Web development • Content creation",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on VR + full‑stack projects",
    description: "Recent highlights",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want to collaborate on a project?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Samsarah — Virtual Museum (AR/VR)",
    des: "A Unity XR virtual museum exploring Earth’s history through interactive exhibits and guided navigation.",
    img: "/p1.png",
    iconLists: ["/c.svg", "/re.svg", "/tail.svg", "/git.svg", "/next.svg"],
    link: "#",
    sourceCode: "https://github.com/karanchaube89/VR--Museum",
  },
  {
    id: 2,
    title: "Expense Tracker — MERN Internship Project",
    des: "A MERN-based expense tracker with authentication, categories, analytics, and a clean dashboard UI.",
    img: "/et.png",
    iconLists: ["/re.svg", "/next.svg", "/tail.svg", "/git.svg", "/c.svg"],
    link: "#",
    sourceCode: "https://github.com/karanchaube89/Expense-Tracker",
  },
  {
    id: 3,
    title: "Tour Planning Website - With AI Chatbot",
    des: "A smart tour planning platform with an AI chatbot to assist users with travel planning.",
    img: "/t5.png",
    iconLists: ["/re.svg", "/tail.svg", "/next.svg", "/git.svg", "/c.svg"],
    link: "#",
    sourceCode: "https://github.com/karanchaube89/Tour-Planning-Website---With-AI-Chatbot",
  },
  {
    id: 4,
    title: "CompFlex — Edits & Brand Portfolio",
    des: "A creative editing portfolio focused on cinematic storytelling, motion design, and visual branding.",
    img: "/ae.png",
    iconLists: ["/re.svg", "/tail.svg", "/next.svg", "/git.svg", "/c.svg"],
    link: "#",
    sourceCode: "https://www.youtube.com/@CompFlex/shorts",
  },
] as const;

export const testimonials = [
  {
    quote: "Building immersive AR/VR experiences in Unity with a strong focus on interaction design, smooth navigation, and polished visual storytelling.",
    name: "AR/VR Development",
    title: "Unity • XR Interaction Toolkit • C#",
  },
  {
    quote: "Creating full-stack web applications with clean UI, scalable backend logic, and practical features that solve real user problems.",
    name: "Full-Stack Web Apps",
    title: "React • Node.js • MongoDB",
  },
  {
    quote: "Exploring AI-assisted interfaces and smart chatbot-driven experiences that make products more interactive, helpful, and future-ready.",
    name: "AI-Assisted Interfaces",
    title: "Chatbots • Automation • Product Thinking",
  },
  {
    quote: "Producing cinematic edits and visual storytelling through CompFlex, combining motion, pacing, and strong design aesthetics.",
    name: "Creative Storytelling",
    title: "Editing • Motion Design • Branding",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "React",
    img: "/re.svg",
    nameImg: "/re.svg",
  },
  {
    id: 2,
    name: "Next.js",
    img: "/next.svg",
    nameImg: "/next.svg",
  },
  {
    id: 3,
    name: "Tailwind CSS",
    img: "/tail.svg",
    nameImg: "/tail.svg",
  },
  {
    id: 4,
    name: "GitHub",
    img: "/git.svg",
    nameImg: "/git.svg",
  },
  {
    id: 5,
    name: "LinkedIn",
    img: "/link.svg",
    nameImg: "/link.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "MERN Stack Internship — ThinkNEXT Technologies",
    desc: "Built a full‑stack Expense Tracker using MERN, focusing on authentication, CRUD flows, and a clean dashboard UI.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "AR/VR Development — Unity + XR",
    desc: "Created interactive Unity experiences (locomotion, interaction design, lighting, and performance optimization).",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "DBMS Projects — Oracle APEX",
    desc: "Designed ER diagrams and implemented database apps with tables, views, subqueries, and reports.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Content Creation — Editing & Design",
    desc: "Produced cinematic edits and social content with a focus on storytelling, pacing, and strong visual identity.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/karanchaube89",
  },
  {
    name: "Twitter",
    img: "/twit.svg",
    link: "https://x.com/KaranChaubey13",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/karan-chaube-90a88a28b/",
  },
] as const;

export const techStack = {
  stack1: ["Unity", "C#", "XR Interaction"],
  stack2: ["React", "Next.js", "MongoDB"],
} as const;
