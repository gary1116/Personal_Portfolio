// Hero
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon'
import FacebookCircleLineIcon from 'remixicon-react/FacebookCircleLineIcon'
import DribbbleLineIcon from 'remixicon-react/DribbbleLineIcon'
import YoutubeLineIcon from 'remixicon-react/YoutubeLineIcon'
import GithubLineIcon from 'remixicon-react/GithubLineIcon'
import LinkedinBoxLineIcon from 'remixicon-react/LinkedinBoxLineIcon'
/* eslint-disable react/jsx-key */
export const heroIcons = [
  {
    icon: InstagramLineIcon,
    url: 'https://www.instagram.com/_gary_m/',
  },
  {
    icon: FacebookCircleLineIcon,
    url: 'https://www.facebook.com/gary.meledath',
  },
  {
    icon: GithubLineIcon,
    url: 'https://github.com/gary1116',
  },
  {
    icon: LinkedinBoxLineIcon,
    url: 'https://linkedin.com/in/gary-m-100bb01aa',
  },
]

// About Me
import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import Projector2LineIcon from 'remixicon-react/Projector2LineIcon'
import GroupLineIcon from 'remixicon-react/GroupLineIcon'
import AwardFillIcon from 'remixicon-react/AwardFillIcon'

export const aboutData = [
  {
    title: 'Github Repos',
    amount: 348,
    icon: <GithubFillIcon />,
  },
  {
    title: 'Successful Projects',
    amount: 227,
    icon: <Projector2LineIcon />,
  },
  {
    title: 'Satisfied clients',
    amount: 176,
    icon: <GroupLineIcon />,
  },
  {
    title: 'Awards and Recognition',
    amount: 107,
    icon: <AwardFillIcon />,
  },
]

import DownloadLineIcon from 'remixicon-react/DownloadLineIcon'
import ArrowLeftSFillIcon from 'remixicon-react/ArrowLeftSFillIcon'

export const downloadIcon = <DownloadLineIcon />
export const arrowLeftIcon = <ArrowLeftSFillIcon />

export const aboutText = [
  "I’m a software developer with experience in building full-stack applications using Java, Spring Boot, and React. I enjoy working on real-world projects and have recently been exploring AI-based applications, integrating APIs to create intelligent and practical solutions.",

  "I’m passionate about continuously improving my skills, whether it’s mastering backend development, building responsive user interfaces, or solving problems through code. I believe in learning by building, which is why I focus on creating projects that reflect real-world use cases.",

  "Outside of coding, I love travelling and exploring new places. It helps me stay curious, refreshed, and inspired—both in life and in the way I approach technology."
];
// End of About Me

// Experience
export const experienceData = [
  {
    year: 2018,
    title: 'Started Engineering in Computer Science',
    education:
      'B.E. in Computer Science, Fr. C. Rodrigues Institute of Technology, Vashi, Navi Mumbai.',
    experience: [
      'Built a strong foundation in programming, data structures, and core computer science concepts.',
    ],
  },
  {
    year: 2022,
    title: 'Graduation',
    education:
      'Graduated with a CGPA of 7.4 from Fr. C. Rodrigues Institute of Technology.',
    experience: [
      'Gained academic knowledge in software development and problem-solving.',
    ],
  },
  {
    year: 2022,
    title: 'Joined Accenture as Associate Software Engineer',
    education:
      'Started professional career with Accenture in November 2022.',
    experience: [
      'Completed training in Java Full Stack development.',
      'Learned core technologies including Java, Spring Boot, and React.',
    ],
  },
  {
    year: 2023,
    title: 'Started Working on Client Projects',
    education:
      'Completed training by February 2023 and began working on real-world projects.',
    experience: [
      'Worked on enterprise-level applications.',
      'Gained hands-on experience in Java, Spring Boot, and frontend development.',
    ],
  },
  {
    year: 2024,
    title: 'Promoted to Software Engineer / Analyst',
    education:
      'Promoted in November 2024 at Accenture.',
    experience: [
      'Worked on multiple projects involving React and Spring Boot.',
      'Improved skills in full-stack development and real-world problem solving.',
    ],
  },
];

// Skills
export const skillsData = [
  {
    name: 'Springboot',
    icon: '/skills/springboot.png',
  },
  {
    name: 'Java',
    icon: '/skills/Java.png',
  },
  {
    name: 'VS Code',
    icon: '/skills/vscode.png',
  },
  {
    name: 'HTML',
    icon: '/skills/html.png',
  },
  {
    name: 'CSS',
    icon: '/skills/css.png',
  },
  {
    name: 'JavaScript',
    icon: '/skills/js.png',
  },
  {
    name: 'TailwindCSS',
    icon: '/skills/tailwind.png',
  },
  {
    name: 'Intellij',
    icon: '/skills/intellij.png',
  },
  {
    name: 'ReactJS',
    icon: '/skills/react.png',
  },
  {
    name: 'Sql',
    icon: '/skills/sql.png',
  },
  {
    name: 'Postgre Sql',
    icon: '/skills/postgresql.png',
  },
  {
    name: 'NextJS',
    icon: '/skills/nextjs.png',
  },
  {
    name: 'Github',
    icon: '/skills/github.png',
  },
]

// Reviews
import StarFillIcon from 'remixicon-react/StarFillIcon'
import StarHalfLineIcon from 'remixicon-react/StarHalfLineIcon'
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'

/* eslint-disable react/jsx-key */
export const starIcons = [<StarFillIcon />, <StarHalfLineIcon />]
export const arrowIcons = [<ArrowLeftSLineIcon />, <ArrowRightSLineIcon />]

export const reviewsData = [
  {
    image: '/reviews/client-4.png',
    name: 'Mark T., Freelance Graphic Designer',
    comment:
      "Your work on our website has been phenomenal. The design is visually stunning and incredibly user-friendly. We've received countless compliments from our customers, and our sales have noticeably increased. Thank you for capturing our brand's essence so perfectly!",
    stars: [1, 1, 1, 1, 0.5],
  },
  {
    image: '/reviews/client-2.png',
    name: 'Sarah B., E-commerce Store Owner',
    comment:
      "Working with you, has been an absolute pleasure. The portfolio website you created for me is sleek, modern, and beautifully showcases my work. Your attention to detail and creative flair are truly impressive. I couldn't be happier with the final result!",
    stars: [1, 1, 1, 1, 1],
  },
  {
    image: '/reviews/client-3.png',
    name: 'Emily R., CEO of Tech Startup',
    comment:
      "The redesign of our corporate website exceeded all expectations. Your innovative ideas and professional execution have given us a site that is not only visually appealing but also highly functional. We've seen a significant improvement in user engagement thanks to your expertise.",
    stars: [1, 1, 1, 1, 1],
  },
  {
    image: '/reviews/client-1.png',
    name: 'Bob W., Lifestyle Blogger',
    comment:
      "I absolutely love the blog design you created for me, [Web Designer's Name]. It's exactly what I envisioned—stylish, unique, and easy to navigate. Your responsiveness and creative input were invaluable. My readers are raving about the new look, and I couldn't be more thrilled!",
    stars: [1, 1, 1, 1, 0.5],
  },
  {
    image: '/reviews/client-5.png',
    name: 'David H., Director of Non-Profit Organization',
    comment:
      "your work on our non-profit’s website has been transformative. The design is clean, engaging, and effectively conveys our mission. We've seen an increase in online donations and volunteer sign-ups, all thanks to your fantastic design. Your dedication and talent are greatly appreciated!",
    stars: [1, 1, 1, 1, 1],
  },
]

// Projects
export const projectsData = [
  {
    name: 'Speech-to-Text Audio Transcriber',
    desc: 'A web application that converts audio files into text using OpenAI APIs. Supports audio upload, real-time transcription, and clean display of results with proper error handling and loading states.',
    url: '/projects/image-1.jpg',
    tech: ['React', 'Spring Boot', 'OpenAI API', 'Java'],
  },
  {
    name: 'Spring AI Lab',
    desc: 'A multi-feature AI application built using Spring Boot that includes chat functionality, a recipe generator, and an image generation tool using AI APIs. Demonstrates integration of multiple AI services in a single platform.',
    url: '/projects/image-2.jpg',
    tech: ['Spring Boot', 'Java', 'React', 'OpenAI API'],
  },
  {
    name: 'SB E-Commerce Backend',
    desc: 'A backend application for an e-commerce platform built using Spring Boot, providing RESTful APIs for product management, cart operations, and order processing. Tested using Postman and integrated with a relational database.',
    url: '/projects/image-3.jpg',
    tech: ['Java', 'Spring Boot', 'JPA', 'Hibernate', 'MySQL'],
  },
];


import CheckLineIcon from 'remixicon-react/CheckLineIcon'

export const checkIcon = <CheckLineIcon />


import ArrowDropDownLineIcon from 'remixicon-react/ArrowDropDownLineIcon'
export const questionArrow = <ArrowDropDownLineIcon />

// Navbar
import CopyrightLineIcon from 'remixicon-react/CopyrightLineIcon'

export const copyRightIcon = <CopyrightLineIcon />

import Home5LineIcon from 'remixicon-react/Home5LineIcon'
import UserLineIcon from 'remixicon-react/UserLineIcon'
import HistoryLineIcon from 'remixicon-react/HistoryLineIcon'
import BriefcaseLineIcon from 'remixicon-react/BriefcaseLineIcon'
import UserStarLineIcon from 'remixicon-react/UserStarLineIcon'
import ProjectorLineIcon from 'remixicon-react/ProjectorLineIcon'

export const navbarData = [
  {
    id: 'home',
    name: 'Home',
    icon: <Home5LineIcon />,
  },
  {
    id: 'about',
    name: 'About',
    icon: <UserLineIcon />,
  },
  {
    id: 'experience',
    name: 'MyRoad',
    icon: <HistoryLineIcon />,
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: <BriefcaseLineIcon />,
  },
  {
    id: 'reviews',
    name: 'Reviews',
    icon: <UserStarLineIcon />,
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: <ProjectorLineIcon />,
  },
]

// Toggle
import MoonFoggyFillIcon from 'remixicon-react/MoonFoggyFillIcon'
import SunFoggyFillIcon from 'remixicon-react/SunFoggyFillIcon'

export const sunIcon = <SunFoggyFillIcon />
export const moonIcon = <MoonFoggyFillIcon />
