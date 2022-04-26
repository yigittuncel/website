import classes from './Navigation.module.css'
import NavigationLogo from "./NavigationLogo";

import NavigationMenu from "./NavigationMenu";
import NavigationToggle from './NavigationToggle';

const Navigation = () => {
  return (
  <nav className={classes.navigation}>
    <NavigationLogo />
    <NavigationMenu />
    <NavigationToggle />
  </nav>
  )
}

export default Navigation;
