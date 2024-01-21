import AngularImg from "../images/Skills/angular.png";
import CImg from "../images/Skills/c.png";
import CssImg from "../images/Skills/css.png";
import DockerImg from "../images/Skills/docker.png";
import DsaImg from "../images/Skills/dsa.png";
import ExpressImg from "../images/Skills/expressjs.png";
import GitImg from "../images/Skills/git.png";
import GithubImg from "../images/Skills/github.png";
import HtmlImg from "../images/Skills/html.png";
import JavaImg from "../images/Skills/java.png";
import JavascriptImg from "../images/Skills/javascript.png";
import MySqlImg from "../images/Skills/mysql.png";
import NodeImg from "../images/Skills/nodejs.png";
import PostmanImg from "../images/Skills/postman.png";
import PythonImg from "../images/Skills/python.png";
import ReactImg from "../images/Skills/react.png";
import RedisImg from "../images/Skills/redis.png";
import RestapiImg from "../images/Skills/restapi.png";
import SpringbootImg from "../images/Skills/springboot.png";
import SqlserverImg from "../images/Skills/sql-server.png";
import SqlImg from "../images/Skills/sql.png";
import StyledcomponentsImg from "../images/Skills/styled-components.png";
import TailwindcssImg from "../images/Skills/tailwind-css.png";
import TypescriptImg from "../images/Skills/typescript.png";
import VscodeImg from "../images/Skills/vs-code.png";
import RocketlaneImg from "../images/Experience/rocketlane-logo.jpg";
import FidelityImg from "../images/Experience/fidelity-logo.png";
import FidelityCertImg from "../images/Experience/fidelity-intern-cert.png";
import RocketlaneCertImg from "../images/Experience/rocketlane-intern-cert.png";
import CartXImg from "../images/Projects/cartx-image.png";
import PrepXImg from "../images/Projects/prepx-image.png";
import MusicallyImg from "../images/Projects/musically-image.png";
import MatchingTilesImg from "../images/Projects/matchingtiles-image.png";
import RockPaperScissorsImg from "../images/Projects/rock-paper-scissors-image.png";


export const Bio = {
    name: "Sujithkumar S",
    roles: [
      "Full Stack Developer",
      "Competitive Coder",
      "Programmer",
    ],
    description:
      `I am a motivated and versatile individual, always eager to take on new challenges.
      With a passion for learning I am dedicated to delivering high-quality results.
      With a positive attitude and a growth mindset, I am ready to make a meaningful
      contribution and achieve great things.`,
    github: "https://github.com/5ujith",
    resume:
      "https://drive.google.com/file/d/1zOvGWmxlfvNPF17u0NuSvN07deOVI8zn/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/sujith-s-1a01a61ba/",
};

export const skills = {
  title: "Skills",
  desc: "Here are some of my skills..",
  data: [
    {
      skillTitle: "Programming Languages",
      skillList: [
        {
          name: 'Python',
          image: PythonImg
        },
        {
          name: 'Java',
          image: JavaImg
        },
        {
          name: 'C',
          image: CImg
        },
        {
          name: 'Javascript',
          image: JavascriptImg
        },
        {
          name: 'SQL',
          image: SqlImg
        }
      ]
    },
    {
      skillTitle: "Frontend",
      skillList: [
        {
          name: 'Html',
          image: HtmlImg
        },
        {
          name: 'CSS',
          image: CssImg
        },
        {
          name: 'React Js',
          image: ReactImg
        },
        {
          name: 'Typescript',
          image: TypescriptImg
        },
        {
          name: 'TailwindCSS',
          image: TailwindcssImg
        },
        {
          name: 'Styled Components',
          image: StyledcomponentsImg
        },
        {
          name: 'Angular Js',
          image: AngularImg
        }
      ]
    },
    {
      skillTitle: 'Backend',
      skillList: [
        {
          name: 'Node Js',
          image: NodeImg
        },
        {
          name: 'Express Js',
          image: ExpressImg
        },
        {
          name: 'Redis',
          image: RedisImg
        },
        {
          name: 'SpringBoot',
          image: SpringbootImg
        },
        {
          name: 'REST',
          image: RestapiImg
        },
        {
          name: 'MySql',
          image: MySqlImg
        },
        {
          name: 'SQL Server',
          image: SqlserverImg
        }
      ]
    },
    {
      skillTitle: 'Others',
      skillList: [
        {
          name: 'Data Structures & Algorithms',
          image: DsaImg
        },
        {
          name: 'Git',
          image: GitImg
        },
        {
          name: 'Github',
          image: GithubImg
        },
        {
          name: 'Docker',
          image: DockerImg
        },
        {
          name: 'Postman',
          image: PostmanImg
        },
        {
          name: 'VS Code',
          image: VscodeImg
        },
      ]
    }
  ]
}

export const experience = {
  title: 'Experience',
  desc: "Here are my work experiences..",
  data: [
    {
      role: 'Software Engineer Intern',
      image: FidelityImg,
      org: 'Fidelity Investments',
      date: 'Jun 2023 - Aug 2023',
      certificate: {
        image: FidelityCertImg,
        link: 'https://drive.google.com/file/d/1LhdtU2kLCf145dAdRnU64Wj_tbjniX0g/view?usp=drive_link'
      },
      contribution: `Collaborated with a team of two as a Full Stack Web Development Intern, 
      leveraging advanced technologies to create the Document Onboarding Toolkit; 
      optimized workflow efficiency, resulting in a 50% reduction in document processing time.
      Developed and deployed a user-friendly toolkit that empowered system users to seamlessly
      onboard documents, eliminating manual steps and reducing onboarding time by 50%.`,
      technologies: ['Java', 'SpringBoot', 'Angular Js', 'MSSQL', 'Insomnia']
    },
    {
      role: 'Frontend Developer Intern',
      image: RocketlaneImg,
      org: 'Rocketlane',
      date: 'Dec 2022 - Jan 2023',
      certificate: {
        image: RocketlaneCertImg,
        link: 'https://drive.google.com/file/d/18Wj9uaT7k-zKyrlP6MkpR6Vli2QrmWa4/view?usp=drive_link'
      },
      contribution: `Successfully identified and resolved bugs in the frontend codebase, 
      enhancing user experience and improving overall application functionality.
      Demonstrated proficiency in utilizing debugging tools and techniques to efficiently 
      locate and address frontend issues, ensuring smooth and error-free user interactions.`,
      technologies: ['React Js', 'React Dev Tools', 'Ant Design']
    }
  ]

};

export const education = {
  title: 'Education',
  desc: "Here are my educational qualifications..",
  data: [
    {
      school: 'SASTRA University, Thanjavur',
      degree: 'B.Tech - Information Technology',
      grade: '8.51 CGPA',
      courses: ['OOP', 'Data Structures', 'Algorithms', 'Operating System', 'Computer Networks'],
      duration: 'Aug 2020 - 2024'
    },
    {
      school: 'Maxwell Matric Hr Sec School, Thanjavur',
      degree: 'HSC(+2)',
      grade: '82.00%',
      courses: ['Computer Science', 'Mathematics', 'Physics'],
      duration: 'Mar 2019 - 2020'
    },
    {
      school: 'Maxwell Matric Hr Sec School, Thanjavur',
      degree: 'SSLC',
      grade: '92.40%',
      courses: ['Science', 'Mathematics', 'English'],
      duration: 'Mar 2017 - 2018'
    },   
  ]
};

export const projects = {
  title: 'Projects',
  desc: 'Here are some of my projects..',
  data: [
    {
      name: 'PrepX',
      image: PrepXImg,
      technologies: ['React Js', 'Tailwind CSS', 'Node Js', 'Express Js', 'MySql'],
      desc: `Built a feature-rich blog-oriented Full Stack Web Application using React JS, Redux, 
      Tailwind CSS, Node JS, and MySQL. Implemented 4 key features -  Discuss, Profile, 
      User Following and Followers. Utilized Redux for efficient state management.
      Enhanced user experience and navigation by 30% through pagination.`,
      link: '',
      githubLink: 'https://github.com/5ujith/PrepX-Frontend'
    },
    {
      name: 'CartX',
      image: CartXImg,
      technologies: ['React Js', 'Tailwind CSS', 'Node Js', 'Express Js', 'MySql'],
      desc: `Developed an e-commerce Full Stack Web Application using React JS, Tailwind CSS, Node JS, and MySQL.
      Achieved 20% reduction in initial loading time by strategically implementing lazy loading.
      Optimized frontend search using debouncing and caching, achieving a 20% improvement in response times.
      Integrated secure sign-in/sign-up for user authentication.`,
      link: '',
      githubLink: 'https://github.com/5ujith/CartX-Frontend'
    },
    {
      name: 'Musically',
      image: MusicallyImg,
      technologies: ['Html', 'CSS', 'Javascript'],
      desc: `Developed a Frontend Music Web Application.
      A user-friendly website which resembles the spotify website.
      Consist of four pages with easy navigation with some songs.`,
      link: '',
      githubLink: 'https://github.com/5ujith/Musically'
    },
    {
      name: 'Matching Tiles',
      image: MatchingTilesImg,
      technologies: ['Python', 'Tkinter'],
      desc: `Developed a GUI game application.
      You need to match boxes with same numbers.
      If you fail to match, an incorrect pop-up box will appear.
      If you win then, CONGRATULATIONS!.`,
      link: '',
      githubLink: 'https://github.com/5ujith/MatchingTiles'
    },
    {
      name: 'Rock, Paper, Scissors',
      image: RockPaperScissorsImg,
      technologies: ['Python', 'Tkinter'],
      desc: `Developed a GUI game application.
      Rock vs Paper -> Paper wins.
      Rock vs Scissor -> Rock wins.
      Paper vs Scissor -> Scissor wins.`,
      link: '',
      githubLink: 'https://github.com/5ujith/Rock-Paper-Scissors'
    },
  ]
}

export const contact = {
  title: 'Contact',
  desc: 'Feel free to contact me..',
  email_heading: 'Send an Email',
  input_placeholders: [
    'Your Name',
    'Your Email'
  ],
  text_placeholders: [
    'Message'
  ],
  button_content: 'Send'
}

export const footer = {
  name: 'Sujithkumar S',
  links: {
    linkedin: 'https://www.linkedin.com/in/sujith-s-1a01a61ba/',
    github: 'https://github.com/5ujith',
    mail: 'mailto:sujithkumar.shanmugam1@gmail.com'
  },
  copyright_message: '© 2024 Sujithkumar S. All rights reserved.'
}
