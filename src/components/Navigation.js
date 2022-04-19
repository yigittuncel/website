import { Fragment, useState } from "react";
import classes from './Navigation.module.css'
import menu from '../assets/bars-solid.svg'
import NavigationMenu from "./NavigationMenu";

const Navigation = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  const toggleHeader = () => {
    setShowNavigation(prevState => !prevState);
  }

  return (
    <Fragment >
      <div className={classes.navigation}>
        <p>YT</p>
        <img src={menu} alt='menubar' onClick={toggleHeader} />
      </div>
      {showNavigation && <NavigationMenu toggleHeader={toggleHeader} />}
    </Fragment>
  )
}

export default Navigation;
