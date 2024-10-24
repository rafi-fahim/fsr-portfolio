import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  fiverr,
  tripguide,
  threejs,
  fsr_story,
  mojak,
  logo,
  robot,
  game,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Robotics Expert",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "CEO",
    company_name: "FSR SOFT",
    icon: logo,
    iconBg: "#383E56",
    date: "Feb 2022 - Now",
    points: [
      "I am CEO of my own company FSR SOFT",
      "Here I provide It services",
      "Helping other with their CS issues",
      "Self taught & studing more to make it real",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Fiverr",
    icon: fiverr,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - Current",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Gamer",
    company_name: "Any games",
    icon: game,
    iconBg: "#383E56",
    date: "FEB 2011 - Now",
    points: [
      "Can adapt any type of games, EX- Adventure, Open World, FPS",
      "Proficient in FPS & TPS games",
      "Have a great steam & epic games library",
      "Gaming is in my blood",
    ],
  },
  {
    title: "Robotics",
    company_name: "Small to Mid",
    icon: robot,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Present",
    points: [
      "Have the basic to intermediet knowledge in electrical circuits",
      "Can make some projects with arduino & esp microcontrollers",
      "Yeah also burned some circuits.",
      "Participating in competitions on robotics.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Fahim's work was not only accurate and elegant, but he also completed the project in an exceptionally timely manner. Throughout the process, Fahim impressed me with his professionalism. He was consistently polite, straightforward in his communication, and incredibly responsible.",
    name: "Combasso",
    designation: "CEO",
    company: "Brazil",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/ffadbcdbf6e2eda7d1fb8ea13edcac86-1555414186642/6e7c3ba6-1468-4e74-b349-cb1ee2e23b1e.jpeg",
  },
  {
    testimonial:
      "Yes, he did good response time is great considering I think he's in school",
    name: "Gyal",
    designation: "Employee",
    company: "USA",
    image: "https://fiverr-res.cloudinary.com/t_small_thumbnail,q_auto,f_auto/attachments/profile/photo/b5ec0304d8212f5ab3e211f862cdf1b0-1152042651722389934931/JPEG_20240730_213854_498635254418404514.jpg",
  },
  {
    testimonial:
      "Great and experienced professional who does a great job in record time. Also possesses good communication skills.",
    name: "Jay Loop",
    designation: "Employee",
    company: "Africa",
    image: "https://fiverr-res.cloudinary.com/t_small_thumbnail,q_auto,f_auto/profile/photos/15754965/original/IMG_20150908_170908.jpg",
  },
];

const projects = [
  {
    name: "Mojak",
    description:
      "Web-based platform that allows users share poems & read other's poems. It is for the youth to have something similer to facebook but for only poems",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: mojak,
    source_code_link: "https://mojak.vercel.app",
  },
  {
    name: "FSR Story",
    description:
      "A web application for people to share their amazing life stories & also read other's stories. It is a social media based app",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next_js",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: fsr_story,
    source_code_link: "https://fsrstory.vercel.app/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
