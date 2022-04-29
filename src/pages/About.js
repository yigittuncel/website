import classes from "./About.module.css";
import photo from "../assets/1564914639910.jpeg";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Helmet from "react-helmet";

const About = () => {
  const skillsArray = [
    "Javascript",
    "React",
    "Redux",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Ruby",
    "Ruby on Rails",
    "Github",
    "Git",
    "Heroku",
    "Firebase",
    "PostgreSQL",
    "Figma",
    "Adobe XD",
    "Illustrator",
    "Photoshop",
  ];

  const skills = (
    skillsArray.map(skill => <p>{skill}</p>)
  )

  return (
    <div className={classes.about}>
      <Helmet>
        <title>Yigit Tuncel | About</title>
        <meta
          name="description"
          content="This page contains informations about me any my skills."
        />
      </Helmet>
      <div className={classes["about-section"]}>
        <div className={classes.design}>
          <h3>design</h3>
          <p>
            I have studied master and bachelor in architecture. During my
            studies and professional work experiences, I have been involved with
            different perspectives of design from the pavilion, quadrocopters,
            bicycles to factories, residential buildings, shopping malls, etc.
            It is the nature of architecture, that you can experience various
            design principles and have a chance to implement them in the
            different buildings, objects, or vehicles. Having a design
            background makes me a successful frontend developer.
          </p>
        </div>
        <img src={photo} alt="profile" className={classes.photo}></img>
        <div className={classes.develop}>
          <div className={classes["develop-title"]}>
            <MdOutlineKeyboardArrowLeft />
            <h3>develop</h3>
            <MdOutlineKeyboardArrowRight />
          </div>
          <p>
            In the design projects that I worked on, I have used computational
            design tools such as grasshopper and rhino. This made me interested
            in coding a lot. I joined the full-stack web development boot camp
            to achieve my goal to become a developer. After the program, I
            discovered that I have a huge interest in frontend development,
            which also fits my design background. I would like to work on
            projects which aim to provide good user interfaces and experiences.
            I am eager to keep learning modern technologies and keep updated
            myself on new industry standards.
          </p>
        </div>
      </div>
      <div className={classes.skills}>
        <h3>Skills</h3>
        <div className={classes.programs}>
          {skills}
        </div>
      </div>
    </div>
  );
};

export default About;
