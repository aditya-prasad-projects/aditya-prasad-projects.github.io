
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Aditya Prasad",
  title: "Hi all, I'm Aditya",
  subTitle: emoji("A passionate Software Developer 🚀 who likes to use data to help communities and would like to work with an organization that provides ample opportunities for research, design and exploring new technologies."),
  resumeLink: "https://drive.google.com/file/d/1Ss7SXmcIel2EQbtVPFCnNzUBkT97q0cF/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/aditya-prasad-projects",
  linkedin: "www.linkedin.com/in/Adityap96",
  gmail: "prasad.adi31@gmail.com",
};
// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY DATA ENTHUSIAST WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop Scalable, Production level data pipelines"),
    emoji("⚡ Build Distributed API's to develop microservices"),
    emoji("⚡ Explore POC's by leveraging knowledge in Cloud Computing")
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */
  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Kafka",
      image: require("./assets/images/kafka.png"),
      size: "30px"
    },
    {
      skillName: "GraphQL",
      image: require("./assets/images/graphQL.png"),
      size: "50px"
    },
    {
      skillName: "Spark",
      image: require("./assets/images/apacheSpark.png"),
      size: "80px"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Airflow",
      fontAwesomeClassname: "fas fa-fan"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Northeastern University",
      logo: require("./assets/images/northeasternUniversity.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2018 - December 2020",
      desc: "Data Structures, C/C++, Object Oriented design, Unix, Software Engineering, DBMS"
    },
    {
      schoolName: "Sir MVIT",
      logo: require("./assets/images/sirMVIT.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2014 - April 2018",
      desc: "Computer System, Algorithms, Machine Learning, Natural Language Processing, Reinforcement Learning, Large-Scale Parallel Data Processing, Data-Mining Techniques"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Engineering",
      progressPercentage: "70%"
    },
    {
      Stack: "Full Stack",
      progressPercentage: "80%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Software Engineer Co-Op",
      company: "TripAdvisor",
      companylogo: require("./assets/images/tripAdvisorLogo.jpg"),
      date: "Jan 2020 – Aug 2020",
      descBullets: [
        "Created a distributed, multi-threaded microservice that uses Apache Kafka, Memcached, GraphQL, Java accompanied by react components to integrate with google translate services to help translate reviews on TripAdvisor website.",
        "Increased load performance of detail pages by 8% through the refactoring of Reviews and Questions Tab Component to utilize backend microservices through GraphQL, while collaborating with many different teams and stakeholders.",
        "Built scalable APIs in a microservice ecosystem, leveraging my knowledge in GraphQL and Java, to support Pagination, travel advisory, and map components."
      ]
    },
    {
      role: "Volunteer Data Engineer",
      company: "ZeroStoreFront",
      companylogo: require("./assets/images/zeroStoreFront.png"),
      date: "Jan 2020 – Present",
      descBullets: [
        "Incorporated a messaging platform on restaurant websites, to help restaurant owners grow customer engagement.",
        "Integrated a data pipeline to combine local business reviews with customer orders in order to create customer profiles which can be utilized by local businesses to upturn reviews, ratings and more importantly revenue.",
        "Leveraged knowledge in designing data schemas, Airflow, Python, Apache Kafka, S3, Apache Spark and Redshift."
      ]
    },
    {
      role: "Full Stack ISG Storage Intern",
      company: "Dell EMC",
      companylogo: require("./assets/images/dellEMCLogo.png"),
      date: "May 2019 – Aug 2019",
      descBullets: [
        "Designed, developed and rolled out an application to retrieve Live System Testing data, facilitating the monitoring and analyzing capabilities of the system testing framework. (Vue, Python, MySql, Redis, REST API’s).",
        "Spearheaded the development of the System Testing framework for ISILON storage device, slashing the consumption of resources in operations of ISILON testing team by 70%."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "aditya-prasad-projects", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME COMMUNITY PROJECTS I HAVE BUILT TO EMPOWER PEOPLE WITH DATA",
  projects: [
    {
      image: require("./assets/images/InsideAirbnb.png"),
      link: "https://aditya-prasad-projects.github.io/Data-Pipeline-for-analyzing-Inside-Airbnb-dataset/"
    },
    {
      image: require("./assets/images/bostonRent.jpeg"),
      link: "https://aditya-prasad-projects.github.io/Airbnb-Analysis-Using-Spark/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Teaching Assistant",
      subtitle: "Teaching Assistant for Algorithms and Data Structure in Fall 2019, Fall 2020",
      image: require("./assets/images/teachingAssistantLogo.jpg"),
    },
    {
      title: "Data Engineering Nanodegree",
      subtitle: "Pursuing a nanodegree program on Udacity to enhance my skills in SQL, Cloud Computing, Spark, Airflow",
      image: require("./assets/images/dataEngineeringNanodegree.jpeg"),
      footerLink: [
        { name: "Final Project", url: "https://aditya-prasad-projects.github.io/Data-Pipeline-for-analyzing-Inside-Airbnb-dataset/" }
      ]
    },
    {
      title: "Data Streaming Nanodegree",
      subtitle: "Pursuing a nanodegree program on Udacity to enhance my skills in Kafka, Spark Streaming, KSQL, Faust Streaming ",
      image: require("./assets/images/dataStreaming.jpg"),
    }
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (669) 216-7564",
  email_address: "prasad.adi31@gmail.com"
};

export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, contactInfo};
