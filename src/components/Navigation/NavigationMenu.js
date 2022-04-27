import { NavLink } from "react-router-dom";
import { BsFillMoonFill } from "react-icons/bs";
import './NavigationMenu.css'


const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

setLight();
setDark()


const NavigationMenu = (props) => {
  const {isNavExpanded, setIsNavExpanded} = props

  return (
    <div className={ isNavExpanded ? "navigationMenu expanded" : "navigationMenu"}>
      <ul>
        <li><NavLink to='/' exact activeClassName="active" onClick={() => setIsNavExpanded(prev => !prev)}>home</NavLink></li>
        <li><NavLink to='/about' activeClassName="active" onClick={() => setIsNavExpanded(prev => !prev)}>about</NavLink></li>
        <li><NavLink to='/projects' activeClassName="active" onClick={() => setIsNavExpanded(prev => !prev)}>projects</NavLink></li>
        <li><NavLink to='/contact' activeClassName="active" onClick={() => setIsNavExpanded(prev => !prev)}>contact</NavLink></li>
      </ul>
      <BsFillMoonFill className='navigation-toggle'/>
    </div>
  )
}

export default NavigationMenu;
