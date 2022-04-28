import { NavLink } from "react-router-dom";
import classes from "./ProjectItem.module.css";
import ProjectItemInfos from "./ProjectItemInfos";
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'
import Helmet from 'react-helmet'

const ProjectItem = (props) => {
  if (!props.project) {
    return (<p>No Project found</p>)
  }
  const { project } = props;

  return (
    <>
      <div className={classes.project}>
      <Helmet>
        <title>{project.title}</title>
        <meta
          name="description"
          content={project.description}
        />
      </Helmet>
        <div className={classes.images}>
          <NavLink to={project.previous}><AiOutlineArrowLeft className={classes.arrow} /></NavLink>
          <a href={project.projectUrl}>
            <img className={classes.desktop} src={`${project.images[0]}`} alt={project.title}></img>
            <img className={classes.mobile} src={`${project.images[1]}`} alt={project.title}></img>
          </a>
          <NavLink to={project.next}><AiOutlineArrowRight className={classes.arrow} /></NavLink>
        </div>
        <h3 className={classes.projectTitle}>{project.id.toUpperCase()} <span>{project.title}</span></h3>
        <div className={classes.line}></div>
        <ProjectItemInfos project={project}/>
      </div>
    </>
  );
};

export default ProjectItem;
