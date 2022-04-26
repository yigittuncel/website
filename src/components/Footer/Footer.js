import classes from './Footer.module.css'
import FooterCredential from './FooterCredential';
import FooterSocial from './FooterSocial';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <FooterCredential />
      <div className={classes.line}>
      </div>
      <FooterSocial />
    </footer>
  )
}

export default Footer;
