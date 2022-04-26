import { NavLink } from "react-router-dom";
import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={classes.projects}>
      <ul>
        <li>
          <NavLink to="/projects/p1" activeClassName={classes.active}>
            P1 refresh your style
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects/p2" activeClassName={classes.active}>
            P2 city stroll
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects/p3" activeClassName={classes.active}>
            P3 personal website
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
