import classes from "./Navigation.module.css";
import NavigationLogo from "./NavigationLogo";

import NavigationMenu from "./NavigationMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";

import { useScrollBlock } from "../../hooks/useScrollBlock";

const Navigation = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    if (isNavExpanded) {
      blockScroll();
    } else {
      allowScroll();
    }
  }, [isNavExpanded, blockScroll, allowScroll]);

  return (
    <nav className={classes.navigation}>
      <NavigationLogo
        isNavExpanded={isNavExpanded}
        setIsNavExpanded={setIsNavExpanded}
      />
      <GiHamburgerMenu
        className={classes.hamburger}
        onClick={() => {
          setIsNavExpanded((prevState) => !prevState);
        }}
      />
      <NavigationMenu
        isNavExpanded={isNavExpanded}
        setIsNavExpanded={setIsNavExpanded}
      />
    </nav>
  );
};

export default Navigation;
