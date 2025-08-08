const en = {
  language: "English",
  mail: "phchedidk@gmail.com",
  hero:{
    begin: "Developer with emphasis on",
    end: " Creating reliable and high-performance solutions.",
    button: {
      contact: "Get in Touch",
      download: "Download CV"
    },
  },
  contact: {
    tab_name: "Contact",
    local: "Localization",
    title_begin: "Let's",
    title_end: "Talk",
    intro: "Got a project in mind? I'm always open to discuss new opportunities and interesting challenges.",
  },
  about: {
    tab_name: "About Me",
    intro_begin: "Turning",
    intro_highlight:  "ideas",
    intro_end: "into code",
    head: "Hello, my name is Pedro Henrique, also known as Chedid.",
    body: `I am a self-taught backend developer with a strong interest
          in technology and a constant drive for learning. I have solid 
          experience with Python and Golang, working on API development, 
          web applications, automation, integration with external services,
          as well as data processing and organization (ETL). I also have
          complementary knowledge in infrastructure, which allows me to 
          understand and contribute to the complete application lifecycle.
          I have used tools like Docker to facilitate the creation of 
          portable and reproducible environments, and Selenium for complex 
          web automation.`,
    footer: `I believe that clean code, comprehensive testing, and clear 
          documentation are fundamental to the success of any project. 
          My profile is focused on solving problems efficiently and in a
          structured manner, with attention to code quality, scalability,
          and clarity of the solutions developed.`
  },
  projects: {
    tab_name: "Projects",
    title_begin: "Featured",
    title_end: "Projects",
    intro: "Some of the projects I've developed, showcasing the practical application of my skills."
  },
  reffs:{
    "project1": {
      "title": "Financial Cli",
      "description": "This project is a rewrite of Monetary Maid, originally made in Python, now rewritten in Go with a DDD-based architecture.",
      "technologies": ["Golang", "Gorm", "Sqlite3"],
      "status": "v1",
      "url": "https://github.com/Ch3did/Financial-cli"
    },
    "project2": {
      "title": "Monetary Maid",
      "description": "Command line interface (CLI) for simplified financial control, integrated with Nubank and category selection. The application receives an OFX file as input, adjusts the data, and automatically categorizes it.",
      "technologies": ["Python", "Sqlmodel", "Click", "Sqlite3"],
      "status": "v1",
      "url": "https://github.com/Ch3did/Financial-Manager"
    },
    "project3": {
      "title": "New York Times Article Crawler",
      "description": "Scraping the New York Times website and extracting article data. The application uses Selenium and a WebDriver to interact with the site and retrieve information like title, description, date, image, and image URL. It also offers filters based on month, specific words, and NYT sections.",
      "technologies": ["Python3", "Selenium", "Pydantic", "Requests"],
      "status": "Complete",
      "url": "https://github.com/Ch3did/New-York-Times-Article-Crawler"
    },
    "project4": {
      "title": "Developer Allocation-API",
      "description": "The Developer Allocation API is an application written in Django, designed to manage and allocate software developers to projects. Its main goal is to ensure project managers can efficiently assign developers considering their specializations and project needs.",
      "technologies": ["Python3", "Django", "DRF", "Postgres", "Pytest", "Docker"],
      "status": "Complete",
      "url": "https://github.com/Ch3did/Developer-Allocation-API/"
    },
    "project5": {
      "title": "Me (Eu)",
      "description": "This portfolio that you are currently viewing...",
      "technologies": ["Typescript",  "React", "Vite", "Docker"],
      "status": "Complete",
      "url": "https://github.com/Ch3did/me"
    },
    "project6": {
      "title": "Install",
      "description": "Shell script to install tools and configure new Ubuntu machines.",
      "technologies": ["Sh"],
      "status": "Complete",
      "url": "https://github.com/Ch3did/Install"
    }
  }


};  

export default en;
