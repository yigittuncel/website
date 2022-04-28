import { Link } from 'react-router-dom';
import classes from './NavigationLogo.module.css'

const NavigationLogo = (props) => {
  const {isNavExpanded, setIsNavExpanded} = props;

  const closeNavHandler = () => {
    if (isNavExpanded) {
      setIsNavExpanded(false)
    }
  }

  return (
    <Link to='/' className={classes['navigation-logo']} onClick={closeNavHandler}>
      yt
    </Link>
  )
}

export default NavigationLogo;
