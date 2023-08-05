import {
  mobile,
  backend,
  nu,
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
  qtern,
  jobit,
  tripguide,
  threejs,
  aws,
  sklearn,
  pandas,
  numpy,
  matplotlib,
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
    title: "CS + Journalism Student",
    icon: nu,
  },
  {
    title: "Software Engingeer",
    icon: mobile,
  },
  {
    title: "Technical Writer",
    icon: backend,
  },
];

const technologies = [
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
    name: "Python",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Django",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "sklearn",
    icon: sklearn,
  },
  {
    name: "pandas",
    icon: pandas,
  },
  {
    name: "numpy",
    icon: numpy,
  },
  {
    name: "matplotlib",
    icon: matplotlib,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
];

const experiences = [
  {
    title: "Research Assistant",
    company_name: "Eastside Research Associates",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2021 - June 2022",
  },
  {
    title: "CoFounder + Team Resident",
    company_name: "hostU",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Mar 2023",
  },
  {
    title: "Software Engineer Intern",
    company_name: "Flow",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - May 2023",
  },
  {
    title: "AI/ML Intern",
    company_name: "AtScale",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2023 - Sep 2023",
  },
];

const projects = [
  {
    name: "Qtern",
    description:
      "A React/Django/PostgreSQL web application that enables journalists to harness the power of AI/ML to complete better interviews and more efficiently produce stories.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "ML",
        color: "pink-text-gradient",
      },
    ],
    image: qtern,
    source_code_link: "https://github.com/mikeycrystal/QTern",
  },
  {
    name: "Inspirational Quote Generator",
    description:
      "React/GraphQL/AWS Lambda application that generates inspirational quotes and gives the option to download the quote card you created.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "green-text-gradient",
      },
      {
        name: "aws lambda",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://prod.d1p78wan5sodzg.amplifyapp.com/",
  },
  {
    name: "Cardio Tracker",
    description:
      "A JS/Leaflet personal application that logs and tracks my runs and bike rides.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "Leaflet",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/mikeycrystal/Exercise-Tracker",
  },
];

export { services, technologies, experiences, projects };
