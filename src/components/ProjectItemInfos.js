import classes from './ProjectItemInfos.module.css'

const ProjectItemInfos = (props) => {
  const {project} = props

  const avatars = project.avatars.map(url => (
    <li key={url} className={classes.avatar}><img src={url} alt='avatar' ></img></li>
  ))

  const collobrators = project.collobrators.map(collobrator => (
    <li key={collobrator} className={classes.collobrator}>{collobrator}</li>
  ))

  const stacks = project.stacks.map(stack => (
    <p key={stack}>{stack}</p>
  ))


  return (
    <div className={classes.infos}>
      <div className={classes.collobrators}>
        <h3 className={classes.title}>{project.avatars.length > 1 ? 'collaborators' : 'collaborator'}</h3>
        <ul className={classes.avatars}>
          {avatars}
        </ul>
        <ul className={classes.collobrators}>
          {collobrators}
        </ul>
      </div>
      <div className={classes.project}>
        <h3 className={classes.title}>about the project</h3>
        <p>{project.description}</p>
        <p className={classes.duration}>This project is built in {project.duration}</p>
      </div>
      <div className={classes.stacks}>
        <h3 className={classes.title}>tech stacks used</h3>
        <div className={classes['tech-stacks']}>
          {stacks}
        </div>
      </div>
    </div>
  )
}

export default ProjectItemInfos;
