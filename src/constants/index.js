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
    java,
    tailwind,
    nodejs,
    mongodb,
    git,
    sql,
    redux,
    figma,
    docker,
    android,
    flutter,
    python,
    zs,
    k,
    transformation,
    sahyadri,
    tripguide,
    threejs,
    shortestPath,
    womanSafety,
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
      title: "Android Developer",
      icon: mobile,
    },
    {
      title: "Full Stack Developer",
      icon: backend,
    },
    {
      title: "Salesforce",
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
      name: "SQL",
      icon: sql,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Java",
      icon: java,
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
      name: "Android",
      icon: android,
    },
    {
      name: "python",
      icon: python,
    },
    
  ];
  
  const experiences = [
    {
      title: "Web Developer Intern",
      company_name: "Knitwork Consultancies Pvt. Ltd.",
      icon: k,
      iconBg: "#383E56",
      date: "August 2020 - December 2020",
      points: [
        "Worked on the development of 3 websites using HTML, CSS, JavaScript, and WordPress:",
        "Knitwork.in - A Job Board website.",
        "KnitworkEducation.in - A website for an educational platform.",
        "PickleMoms.in - An E-commerce platform for small businesses.",
      ],
    },
    {
      title: "Android App Developer Intern",
      company_name: "Sahyadri Foundation",
      icon: sahyadri,
      iconBg: "#383E56",
      date: "March 2021 - April 2021",
      points: [
        "Life First App - Developed an app that tracks Covid-19 cases and provides contact information for Covid Care Services.",
        "Worked with Volley Library, REST API, and Firebase.",
        "Integrated Payment Gateway for donations.",
        "Participated in code reviews and provided constructive feedback to other developers.",
      ],
    },
    {
      title: "Android App Developer Intern",
      company_name: "Ai Can",
      icon: transformation,
      iconBg: "#E6DEDD",
      date: "May 2021 - June 2021",
      points: [
        "Home Automation App - Worked on an app that manages and controls smart home devices such as smart lights, AC, and Fans.",
        "Implemented Google Assistant integration, Alexa app-to-app account linking, and voice widget.",
        "Lab Assistant - Constructed the UI of a Chemistry Lab assistant app that allows experimental automation",
        "Participated in code reviews and provided constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer - Salesforce",
      company_name: "ZS Associates",
      icon: zs,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - August 2023",
      points: [
        "Worked in the SFDC - India Team as a Full Stack Developer involving technologies like Java, HTML, CSS, JavaScript, Lightning Web Components (a framework similar to React), SOQL, and Apex under the Digital App Development Major.",
        "Contributed to the development of a Revenue Management system for a US client involving complex object structures and intricate calculations on large volumes of data on the salesforce platform.",
        "Successfully prevented revenue leakage of 3 million dollars for the client by delivering 41 enhancements and bug fixes in an year.",
        "Processed an overall amount of 21 million dollars as rebates and admin fee for the client.",
        "The system calculated the profit percentages and sales amounts of different products sold by the client by handling a sum of 7 Billion dollars, distributed across 1 million transactions.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Shortest Path Finder",
      description:
        "The platform is a web-based application that enables users to define walls between two predetermined points. It calculates the shortest path between these points while avoiding the defined walls. The implementation utilizes Dijkstra’s Shortest Path Finder Algorithm for shortest path calculation and React JS to create an appealing user interface.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "dijkstra’s algorithm",
          color: "green-text-gradient",
        },
        {
          name: "node js",
          color: "pink-text-gradient",
        },
      ],
      image: shortestPath,
      source_code_link: "https://github.com/rohans2/dijikstras-main",
    },
    {
      name: "Women Safety App",
      description:
        "Android application which acts as a women’s personal bodyguard using Android sensors to detect danger, trigger a siren and send emergency calls/messages upon 3 shakes. It uses the Accelerometer Sensor to detect phone shakes. The app counts and triggers emergency on 3rd shake above the threshold acceleration.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Android",
          color: "green-text-gradient",
        },
        {
          name: "Sensor Programming",
          color: "pink-text-gradient",
        },
      ],
      image: womanSafety,
      source_code_link: "https://github.com/rohans2/WomanSafety",
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };