import classes from './ProjectItem.module.css'

const ProjectItem = (props) => {
  const {project} = props

  return (
    <div className={classes.project}>
      <h1>{project.id}</h1>
      <h1>{project.title}</h1>
      <img src={`${project.images[0]}`} alt={project.id} ></img>
      <img src={`${project.images[1]}`} alt={project.id} ></img>
    </div>
  )
}

export default ProjectItem;
