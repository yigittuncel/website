import { useParams } from "react-router-dom";
import ProjectItem from "../components/ProjectItem";

const projects = [
  {
    id: "p1",
    title: "refresh your style",
    url: "/projects/refresh-your-style",
    collobrators: ["Yigit Tuncel", "Mario Rodriguez", "Christina Borensky"],
    images: ["/images/refreshDesktop.png", "/images/refreshMobile.png"],
    avatars: [
      "/images/yigit.png",
      "/images/mario.png",
      "/images/christina.png",
    ],
    description:
      "A second-hand clothes marketplace focused on a personal brand with photos of the seller styling the items that they want to trade.",
    duration: "2 weeks",
    stacks: [
      "javascript",
      "ruby on rails",
      "html",
      "stimulusjs",
      "chat",
      "postgresql",
      "actioncable",
      "bootstrap",
      "scss",
      "websocket",
      "cloudinary",
      "heroku",
    ],
    projectUrl: "https://www.refresh-your-style.com",
    next: "/projects/city-stroll",
    previous: "/projects/personal-website",
  },
  {
    id: "p2",
    title: "city stroll",
    url: "/projects/city-stroll",
    collobrators: ["Yigit Tuncel", "Mario Rodriguez", "Christina Borensky"],
    images: ["/images/cityDesktop.png", "/images/cityMobile.png"],
    avatars: [
      "/images/yigit.png",
      "/images/mario.png",
      "/images/christina.png",
    ],
    description:
      "A marketplace for booking tours. Users can create their own tours as a guide and see the reservations on their dashboard.",
    duration: "1 week",
    stacks: [
      "javascript",
      "ruby on rails",
      "html",
      "postgresql",
      "bootstrap",
      "css",
      "cloudinary",
      "heroku",
    ],
    projectUrl: "https://city-stroll.herokuapp.com/",
    next: "/projects/personal-website",
    previous: "/projects/refresh-your-style",
  },
  {
    id: "p3",
    title: "personal website",
    url: "/projects/personal-website",
    collobrators: ["Yigit Tuncel"],
    images: ["/images/websiteDesktop.png", "/images/websiteMobile.png"],
    avatars: ["/images/yigit.png"],
    description:
      "Personal website of Yigit Tuncel. It showcases the full-stack web app projects and the single page website developed with react and react-router-dom.",
    duration: "1 week",
    stacks: [
      "react",
      "javascript",
      "react-router-dom",
      "single-page-application",
      "html",
      "css",
      "firebase",
    ],
    projectUrl: "https://yigittuncel.com",
    next: "/projects/refresh-your-style",
    previous: "/projects/city-stroll",
  },
];

const ProjectDetail = () => {
  const params = useParams();
  const project = projects.find(
    (project) => project.url === `/projects/${params.projectId}`
  );

  return <ProjectItem project={project} />;
};

export default ProjectDetail;
