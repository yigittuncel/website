import { NavLink } from "react-router-dom";
import { BsMoon } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import "./NavigationMenu.css";

const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

const storedTheme = localStorage.getItem("theme");

const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
  setDark();
}

const toggleTheme = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};

const NavigationMenu = (props) => {
  const { isNavExpanded, setIsNavExpanded } = props;

  const closeNavHandler = () => {
    if (isNavExpanded) {
      setIsNavExpanded(false);
    }
  };

  return (
    <div
      className={isNavExpanded ? "navigationMenu expanded" : "navigationMenu"}
    >
      <ul>
        <li>
          <NavLink
            to="/"
            exact
            activeClassName="active"
            onClick={closeNavHandler}
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            activeClassName="active"
            onClick={closeNavHandler}
          >
            about
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            activeClassName="active"
            onClick={closeNavHandler}
          >
            projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            activeClassName="active"
            onClick={closeNavHandler}
          >
            contact
          </NavLink>
        </li>
      </ul>
      <div className="toggle-theme-wrapper">
        <BsSun />
        <label className="toggle-theme" htmlFor="checkbox">
          <input
            type="checkbox"
            id="checkbox"
            onChange={toggleTheme}
            defaultChecked={defaultDark}
          />
          <div className="slider round"></div>
        </label>
        <BsMoon />
      </div>
    </div>
  );
};

export default NavigationMenu;
