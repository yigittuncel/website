import classes from './ButtonText.module.css'

const ButtonText = (props) => {
  return (
  <a
    className={classes['btn-text']}
    href={props.href}
    target={props.target}
    rel={props.rel}
  >{props.children}</a>
  )
}

export default ButtonText;
