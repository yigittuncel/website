import { NavLink } from "react-router-dom";
import classes from './NavigationMenu.module.css'

const NavigationMenu = (props) => {
  return (
    <div className={classes['navigation-menu']}>
      <ul>
        <li><NavLink to='/' exact activeClassName={classes.active}>home</NavLink></li>
        <li><NavLink to='/about' activeClassName={classes.active}>about</NavLink></li>
        <li><NavLink to='/projects' activeClassName={classes.active}>projects</NavLink></li>
        <li><NavLink to='/contact' activeClassName={classes.active}>contact</NavLink></li>
      </ul>
    </div>
  )
}

export default NavigationMenu;
