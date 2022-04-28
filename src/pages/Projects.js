import { NavLink } from "react-router-dom";
import classes from "./Projects.module.css";
import Helmet from "react-helmet";

const projects = [
  {
    id: "p1",
    title: "refresh your style",
    url: "/projects/refresh-your-style"
  },
  {
    id: "p2",
    title: "city stroll",
    url: "/projects/city-stroll"
  },
  {
    id: "p3",
    title: "personal website",
    url: "/projects/personal-website"
  }
];

const Projects = () => {
  return (
    <div className={classes.projects}>
      <Helmet>
        <title>Project Page</title>
        <meta
          name="description"
          content="It is the showcase of my selected projects."
        />
      </Helmet>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <NavLink to={project.url}>
              {project.id.toUpperCase()} {project.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
