import { Link } from 'react-router-dom';
import classes from './NavigationLogo.module.css'

const NavigationLogo = () => {
  return (
    <Link to='/' className={classes['navigation-logo']}>
      yt
    </Link>
  )
}

export default NavigationLogo;
