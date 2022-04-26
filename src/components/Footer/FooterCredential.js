import classes from './FooterCredential.module.css'

const FooterCredential = () => {
  const date = new Date().getFullYear();

  return <h5 className={classes.text}>© {date} Created by Yigit Tuncel </h5>;
};

export default FooterCredential;
