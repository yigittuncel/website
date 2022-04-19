import { Link } from "react-router-dom";
import classes from './NavigationMenu.module.css'

const NavigationMenu = (props) => {
  return (
    <nav className={classes['navigation-menu']}>
      <ul>
        <li><Link to='/work' onClick={props.toggleHeader}>Work</Link></li>
        <li><Link to='/about' onClick={props.toggleHeader}>About</Link></li>
        <li><Link to='/contact' onClick={props.toggleHeader}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default NavigationMenu;
