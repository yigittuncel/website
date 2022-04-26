import classes from './About.module.css'
import photo from '../assets/1564914639910.jpeg'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes['about-section']}>
        <div className={classes.design}>
          <h3>design</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <img src={photo} alt='profile' className={classes.photo}></img>
        <div className={classes.develop}>
          <div className={classes['develop-title']}>
            <MdOutlineKeyboardArrowLeft />
            <h3>develop</h3>
            <MdOutlineKeyboardArrowRight />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div className={classes.skills}>
        <h3>Skills</h3>
        <div className={classes.programs}>
          <p>Javascript</p>
          <p>React</p>
          <p>Redux</p>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>Ruby</p>
          <p>Ruby on Rails</p>
          <p>Github</p>
          <p>Git</p>
          <p>Heroku</p>
          <p>PostgreSQL</p>
          <p>SQlite</p>
          <p>Figma</p>
          <p>Adobe XD</p>
        </div>
      </div>
    </div>
  )
}

export default About;
