const projectDetails = [
  {
    id: "project1",
    title: "Fenced.ai",
    sub_title: "A parental app for monitoring child's phone",
    img_url: "images/projects/fenced-ai-inner.png",
    about: [
      "Fenced.ai is an in-house project of Codavatar Tech. I worked in fenced.ai for 1 and half years as a lead React developer. While I was there I worked closely with the UI/UX team, Back-end team and product managing team to build a dashboard for fenced.ai mobile app. I was responsible for building UI components and working with APIs.",
      "As a front-end lead, I was responsible for the looking after interns and perform their code reviews.",
    ],
    tech: [
      "React",
      "TypeScript",
      "SASS",
      "Bootstrap",
      "Formik",
      "Leaflet",
      "Agile Methodology",
    ],
    web_link: "https://fenced.ai/",
  },
  {
    id: "project2",
    title: "Mobilespy.io",
    sub_title: "A mobile spying app",
    img_url: "images/projects/mobilespy-inner.png",
    about: [
      "Mobilespy is an in-house project of Codavatar. I was responsible for building the UI components of the web application, integrate APIs, and add any new feature in the application.",
    ],
    tech: [
      "React",
      "TypeScript",
      "SASS",
      "Leaflet",
      "Bootstrap",
      "Formik",
      "Agile Methodology",
    ],
    web_link: "https://mobilespy.io/",
  },
  {
    id: "project3",
    title: "Entegra - CTMS",
    sub_title:
      "A content management web application for content writers of Entegra.",
    img_url: "images/projects/entegra-inner.png",
    about: [
      "Entegra - CTMS is a content management system for the content writers and admin of Entegra Sources. I worked in this project under a lead developer from scratch to the first beta deployment. I was responsible for creating UI components from figma design and integrate APIs built in Django.",
    ],
    tech: [
      "Next",
      "Javascript",
      "Tailwind",
      "Formik",
      "Ant Design",
      "RTK Query",
    ],
    web_link: "https://entegra-staging.web.app/",
  },
  {
    id: "project4",
    title: "Migratu",
    sub_title: "A mail migrating web application",
    img_url: "images/projects/migratu-inner.png",
    about: [
      "Migratu is a web application for migrating mails from one email to another. I was responsible for designing the UI/UX, integrating REST APIs and building the front-end of the system.",
    ],
    tech: ["React", "Typescript", "SASS", "Formik"],
    web_link: "https://migratu.com/",
  },
  {
    id: "project5",
    title: "Firmpay",
    sub_title: "A fund transfer web application",
    img_url: "images/projects/firmpay-inner.png",
    about: [
      "Firmpay is an international fund transfer web application from USA to Armenia, Mexico and many other countries. I was responsible for designing the UI/UX and integrating APIs and widgets for the cross border payments.",
    ],
    tech: [
      "React",
      "Redux",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Java Springboot",
    ],
    web_link: "https://www.firmpay.com/",
  },
  {
    id: "project6",
    title: "PesaDirect",
    sub_title: "A fund transfer web application",
    img_url: "images/projects/pesadirect-inner.png",
    about: [
      "PesaDirect is an international fund transfer web application from USA to Kenya. I was responsible for designing the UI/UX and integrating APIs and widgets for the cross border payments.",
    ],
    tech: [
      "React",
      "Redux",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Java Springboot",
    ],
    web_link: "https://pesadirect.com/",
  },
  {
    id: "project7",
    title: "JS Flappybird",
    sub_title: "A simple flappy bird game",
    img_url: "images/projects/js-flappybird-inner.png",
    about: [
      "JS Flappybird is a simple flappy bird game created by me for self learning purpose. It doesn't use any third party libraries and is made using pure vanilla JS, html and css only. Please feel free to play the game by clicking above or the link below.",
    ],
    tech: ["HTML", "Javascript", "CSS"],
    web_link: "https://js-flappybird.netlify.app",
  },
];

let activeProject = "";

// Set on click event listener for the project thumbnails
function setActionListener() {
  let projectItems = $(".project-item");
  Object.values(projectItems).forEach((element) => {
    element.addEventListener("click", () => {
      activeProject = element.id;
      setProjectInfo();
      toggleProjectInfo();
      toggleProjectList();
    });
  });
}

// Set active project information in the respective elements. 
function setProjectInfo() {
  const activeProjectInfo = projectDetails.find(
    (project) => project.id === activeProject
  );
  $("#projectHeading").text(activeProjectInfo.title);
  $("#projectDescription").text(activeProjectInfo.sub_title);
  $("#projectImage").attr("src", activeProjectInfo.img_url);
  $("#projectRole").text(activeProjectInfo.about);
  activeProjectInfo.tech.forEach((tech) => {
    $("#technologyList").append("<li>" + tech + "</li>");
  });
  $("#projectWebsite").attr("href", activeProjectInfo.web_link);
  $("#projectWebsite>p").text(activeProjectInfo.web_link);
}

function toggleProjectList() {
  $("#projectList").toggleClass("hide");
}

function toggleProjectInfo() {
  $("#projectDetails").toggleClass("hide");
}

$(document).ready(setActionListener());
