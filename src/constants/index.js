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
    title: "Python, Django",
    icon: mobile,
  },
  {
    title: "Java",
    icon: backend,
  },
  {
    title: "Promt Engineering",
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
    icon: typescript,     //python
  },
  {
    name: "React JS",
    icon: reactjs,       //java
  },
  {
    name: "Redux Toolkit",
    icon: redux,        //django
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
    icon: mongodb,      //microsoft office suite
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "ECC IT SUPPORT SPECIALIST",
    company_name: "The University of Toledo College of Engineering",
    icon: starbucks,
    iconBg: "#383E56",
    date: "October 2023 - Present",
    points: [
      "Led computer system installation in the College of Engineering, prioritizing robust cybersecurity and ensuring licensing compliance",
      "Streamlined high-volume IT ticket queue, reducing resolution time, and enhancing overall user satisfaction.",
      "Prioritized comprehensive communication, resulting in a 20% decrease in recurring issues.",
      "Installation and maintenance of computer systems, prioritizing licensing compliance and nsuring the reliability and security of the College of Engineering's technical infrastructure."

      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality projects.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Softage Information Technology Limited",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2023 - July 2023",
    points: [
      "Developing and maintaining web applications using HTML and other related technologies.",
      "Collaborated cross-functionally with engineering teams, contributing to a remarkable 30% reduction in system downtime and a subsequent boost in overall productivity.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Self-Employed Game Developer",
    company_name: "Roblox",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2022 - August 2023",
    points: [
      "Implemented debugging techniques for improved gameplay and heightened player satisfaction.",
      "Actively participated in collaborative brainstorming sessions for creative game design.",
      "Contributed to a positive team dynamic, fostering an environment of creativity and productivity.",
      "Kept abreast of the latest trends and technologies in the field of game development.",
    ],
  },
  {
    title: "Student Manager",
    company_name: "Subway",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "September 2022 - September 2023",
    points: [
      "Provided outstanding customer service with a profound understanding of menu items, resulting in a consistently high 4 out of 5 satisfaction rating.",
      "Facilitated the smooth onboarding of new team members by offering comprehensive training and explanations, ensuring a 50% reduction in onboarding time",
      "Demonstrated effective collaboration within the team, fostering a positive and customer-focused environment.",
      "Successfully balanced managerial responsibilities with a hands-on approach to customer service.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Meta Back-End Developer",
    name: "Coursera",
    // designation: "CFO",
    company: "Meta",
    image: 'src\assets\coursera.png',
    certification_link: "https://coursera.org/share/315374ab52245f1e9e6ae186e40993df"
  },
  {
    testimonial:
      "Foundations  of  Cybersecurity",
    name: "Coursera",
    // designation: "COO",
    company: "Google",
    image: "https://coursera.org/share/98079da7704575351c2bba611158fef7",
  },
  {
    testimonial:
      "Crash Course on Python",
    name: "Coursera",
    // designation: "CTO",
    company: "Google",
    image: "https://coursera.org/share/ea8b8159ff8f67c3ba8f8df96a2e73d3",
  },
  {
    testimonial:
      "Technical Support Fundamentals",
    name: "Coursera",
    // designation: "COO",
    company: "Google",
    image: "https://coursera.org/share/d369444e7db30a6a90a20707b8b8e30a",
  },
];

const projects = [
  {
    name: "WhatsApp Automation Bot",
    description:
      "Developed a Python script using the PyAutoGUI library to automate repetitive messaging tasks on WhatsApp Web.Implemented user-friendly customization features, including target contact, message content, and message count.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pyautogui",
        color: "green-text-gradient",
      },
      {
        name: "automation",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/avneetxsingh/WhatsApp-Automation-Bot",
  },
  {
    name: "Hospital Management System Project",
    description:
      "Designed and developed a robust Hospital Management System using Python and MySQL to address complex healthcare management challenges.Implemented advanced features, including a secure login system, real-time status tracking, and advanced search functionality.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "management",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Question Answer Web App",
    description:
      "This project involves creating a dynamic webpage using HTML, CSS, and JavaScript with Django as the backend framework. The design includes a logo, a dropdown menu for topic selection, and a chat interface. Users can submit answers, and content is loaded dynamically through Django's template engine, enhancing the overall interactivity of the webpage.",
    tags: [
      {
        name: "Web Development",
        color: "blue-text-gradient",
      },
      {
        name: "Database Management",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/avneetxsingh/ques_answ_Softage",
  },
];

export { services, technologies, experiences, testimonials, projects };
