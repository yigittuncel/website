import classes from './ButtonContained.module.css'
import { Link } from 'react-router-dom';

const ButtonContained = (props) => {
  return (
  <Link
    className={classes['btn-contained']}
    to={props.to}
  >{props.children}</Link>
  )
}

export default ButtonContained;
