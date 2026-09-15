import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Svelte } from "@/components/ui/svgs/svelte";
import { TailwindCSS } from "@/components/ui/svgs/tailwindcss";
import { FastAPI } from "@/components/ui/svgs/fastapi";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { Figma } from "@/components/ui/svgs/figma";
import { Photoshop } from "@/components/ui/svgs/photoshop";
import { Miro } from "@/components/ui/svgs/miro";
import { PowerBI } from "@/components/ui/svgs/powerbi";
import { GoogleColab } from "@/components/ui/svgs/googlecolab";

export const DATA = {
  name: "Joshua Alvarez",
  initials: "JA",
  url: "https://portfolio-booswaa.vercel.app/",
  location: "Philippines",
  locationLink: "https://www.google.com/maps/place/philippines",
  description:
    "a UX Designer and Software Engineer blending design thinking with technical expertise to build meaningful products.",
  summary:
    "I create experiences that feel effortless and perform flawlessly.",
  avatarUrl: "/me.png",
  bio: [
    "I'm a UX Designer and Software Engineer based in the Philippines with a passion for creating intuitive digital experiences. I specialize in blending design thinking with technical expertise to build meaningful products that make a difference.",
    "Currently pursuing my Computer Science degree. I've been actively participating in hackathons and building projects that solve real-world problems. My approach is marked by curiosity and a commitment to quality and performance.",
    "Outside of coding and design, I enjoy exploring new technologies, collaborating with fellow creators, and continuously learning to stay at the forefront of the ever-evolving tech landscape.",
  ],
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Java", icon: Java },
    { name: "C++", icon: Csharp },
    { name: "Svelte", icon: Svelte },
    { name: "TailwindCSS", icon: TailwindCSS },
    { name: "FastAPI", icon: FastAPI },
    { name: "MongoDB", icon: MongoDB },
    { name: "Figma", icon: Figma },
    { name: "Photoshop", icon: Photoshop },
    { name: "Miro", icon: Miro },
    { name: "PowerBI", icon: PowerBI },
    { name: "Google Colab", icon: GoogleColab },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "0kentalvarez@gmail.com",
    tel: "+63 915 883 1501",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/boosquack",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/booswaa/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Eskwelabs",
      href: "",
      badges: [],
      location: "Philippines",
      title: "Data Modelling Intern",
      logoUrl: "",
      start: "2026",
      end: "2026",
      description: "",
    },
    {
      company: "Outomation",
      href: "",
      badges: [],
      location: "Philippines",
      title: "AI/ML Data Extraction Extern",
      logoUrl: "",
      start: "2026",
      end: "2026",
      description: "",
    },
    {
      company: "Data Engineering Pilipinas",
      href: "",
      badges: [],
      location: "Philippines",
      title: "Volunteer",
      logoUrl: "",
      start: "2026",
      end: "2026",
      description: "",
    },
  ],
  education: [
    {
      school: "System Technology Institute College",
      href: "https://sti.edu.ph",
      degree: "Bachelor of Science in Computer Science (BSCS)",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2027",
    },
    {
      school: "Alabel National Science High School",
      href: "https://rshsxii.edu.ph",
      degree: "High School Diploma",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Atuna",
      href: "https://github.com/boosquack/front-end-sibol",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Atuna is Real Estate perfect for the Property Managers, Agents, and Brokers. It helps them to get more leads and automate tasks.",
      technologies: [
        "FastAPI",
        "Typescript",
        "PostgreSQL",
        "Git",
        "TailwindCSS",
        "Vite",
        "HeroUI",
        "Python",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/boosquack/front-end-sibol",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/atuna-demo.mp4",
    },
    {
      title: "Co-Chain",
      href: "",
      dates: "Ongoing since September 2025",
      active: true,
      description:
        "Developed an AI-assisted Product Spoilage Tracking System for the Cold Storage industry using IoT and Logistics. The system utilizes sensors to monitor temperature and humidity levels in real-time, ensuring optimal storage conditions and preventing spoilage. Implemented a user-friendly dashboard for tracking product status, generating alerts for potential issues, and providing insights to optimize inventory management.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      image: "",
      video: "/videos/cochain-demo.mp4",
    },
    {
      title: "Project AirBNB",
      href: "https://project-airbnb-nu.vercel.app/",
      dates: "January 2026",
      active: true,
      description:
        "Created a full-stack Airbnb clone using Next.js, Typescript, TailwindCSS, PostgreSQL, Stripe, Shadcn UI, and Magic UI. The application allows users to browse and book accommodations, manage reservations, and handle payments securely. Implemented features such as user authentication, property listings, search functionality, and a responsive design for an optimal user experience across devices.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "PostgreSQL",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://project-airbnb-nu.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/boosquack/project-airbnb",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/airbnb-demo.mp4",
    },
  
    {
      title: "Portfolio",
      href: "./",
      dates: "January 2026",
      active: true,
      description:
        "Created my personal portfolio website that showcase my aesthetic and brand while also demonstrating my skills as a UX Designer and Software Engineer.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Magic UI",
        "React",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/portfolio-demo.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "HackEstate",
      dates: "August 20th - 30th, 2025",
      location: "Davao",
      description:
        "Developed a web application which helps with the operations of agents, brokers, developers to get more leads and automate tasks.",
    },
    {
      title: "ByteForward Hackathon",
      dates: "August 23rd - 27th, 2025",
      location: "Tagum",
      description:
        "Developed an application which helps MSME's from Cold Storage industry to track the products and ensures the prevention of spoilage using IoT and Logistics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The Future: Young Leaders for Asia",
      dates: "October 10th - 12th, 2025",
      location: "Online",
      description:
        "Developed Lakbayani, a gamified mobile application that bridges digital divide through collaborative actions in waste management.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
    },
        {
      title: "Hack-a-Thon",
      dates: "Novemeber 14th - 24th, 2023",
      location: "Online",
      description:
        "Me and my team developed a hackathon voting system of the Daedalus Community which aims to provide an efficient and transparent way to vote for future endeavors.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
    },
    {
      title: "Hack4Gov Mindanao Chapter",
      dates: "December 6th - 7th, 2025",
      location: "Tupi",
      description:
        "Competed on a Catch the Flag (CTF) cybersecurity competition hosted by the Department of Information and Communications Technology (DICT) Philippines.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
  ],
} as const;
