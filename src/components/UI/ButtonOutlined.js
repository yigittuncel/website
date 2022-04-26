import classes from './ButtonOutlined.module.css'
import { Link } from 'react-router-dom';

const ButtonOutlined = (props) => {
  return (
  <Link
    className={classes['btn-outlined']}
    to={props.to}
  >{props.children}</Link>
  )
}

export default ButtonOutlined;
