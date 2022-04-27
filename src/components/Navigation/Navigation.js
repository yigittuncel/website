import classes from './Navigation.module.css'
import NavigationLogo from "./NavigationLogo";

import NavigationMenu from "./NavigationMenu";
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react';

const Navigation = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)


  return (
  <nav className={classes.navigation}>
    <NavigationLogo />
    <GiHamburgerMenu className={classes.hamburger} onClick={() => {setIsNavExpanded(prevState => !prevState)} }/>
    <NavigationMenu isNavExpanded={isNavExpanded} setIsNavExpanded={setIsNavExpanded} />
  </nav>
  )
}

export default Navigation;
