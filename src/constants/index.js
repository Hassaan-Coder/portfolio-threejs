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
  tripguide,
  threejs,
  excercise,
  fullstack,
  iphone,
  tshirt,
  tic
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];



const projects = [
  {
    name: "E-commmerce web/app",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Strapi",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Stripe",
        color: "pink-text-gradient",
      },
    ],
    image: fullstack,
    source_code_link: "https://github.com/Hassaan-Coder/E-com-Web-App",
  },
  {
    name: "Job IT",
    description:
      "The travel app I developed provides users with an interactive platform to find the best places to travel, including specific attractions, hotels, and restaurants. The frontend of the app is designed to be user-friendly, enabling users to browse through the available options easily. Additionally, the app's advanced search functionality allows users to filter their search based on their preferences, making it easier for them to find their desired travel destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Excercise web/app",
    description:
      "The Excercise website I designed showcases my expertise in developing exercise web/apps. The website features a comprehensive list of all exercises, along with their corresponding YouTube videos, providing users with an interactive and engaging experience. The website's user-friendly interface and visually appealing design make it an ideal platform for fitness enthusiasts looking for a reliable exercise resource.",      
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      
      
      {
        name: "rapidAPI",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: excercise,
    source_code_link: "https://github.com/Hassaan-Coder/Excercise-Web-App",
  },
  {
    name: "Tic-Tac-Toe game",
    description:
        "The e-commerce website/app I designed and developed offers a vast range of audio devices. The website's intuitive interface allows users to navigate easily and find their desired products quickly. The website also ensures a smooth and secure payment process to provide a seamless shopping experience.Watch full video at @hassaan_codes(instagram)",
     
     tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Strapi",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Stripe",
        color: "pink-text-gradient",
      },
    ],
    image: tic,
    source_code_link: "https://github.com/",
  },
  {
    name: "iPhone landing/about page",
    description:
      "This  website showcases my skills in designing stunning UI for iPhone. The landing page features an aesthetically pleasing design that highlights the visual aspects of my work. The website also includes a comprehensive description of my experience and skills in UI design, making it an ideal platform for potential clients to learn more about my work.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Farmer-motion",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind-css",
        color: "pink-text-gradient",
      },
      {
        name: "Three.JS",
        color: "pink-text-gradient",
      },
    ],
    image: iphone,
    source_code_link: "https://github.com/Hassaan-Coder/Iphone-landing-about-page",
  },
  {
    name: "THREE.JS T-shirt Design Web/App",
    description:
      "Web-based platform that allows users to deign their t-shirts according to thier will. ",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Farmer-motion",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind-css",
        color: "pink-text-gradient",
      },
      {
        name: "Three.JS",
        color: "pink-text-gradient",
      },
    ],
    image: tshirt,
    source_code_link: "https://github.com/Hassaan-Coder/Three.js-Tshirt-design",
  },
  
];

export { services, technologies, experiences,  projects };
