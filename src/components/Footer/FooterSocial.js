import {MdOutlineEmail} from 'react-icons/md'
import {BsGithub} from 'react-icons/bs'
import {FiLinkedin} from 'react-icons/fi'
import classes from './FooterSocial.module.css'


const FooterSocial = () => {
  return (
    <ul className={classes.social}>
      <li>
        <a href="mailto: info.yigittuncel@gmail.com">
          < MdOutlineEmail />
        </a>
      </li>
      <li>
        <a href="https://github.com/yigittuncel" target="_blank" rel="noreferrer noopener">
          < BsGithub />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/yigit-tuncel" target="_blank" rel="noreferrer noopener">
          < FiLinkedin />
        </a>
      </li>
    </ul>
  )
}

export default FooterSocial;
