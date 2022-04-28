import ButtonText from "../components/UI/ButtonText";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.contact}>
      <h1>Get in touch</h1>
      <p className={classes.paragraph}>
        Do you wanna say hi or have any questions or feedbacks about my
        projects? Maybe you want to hire me? Get in touch!
      </p>
      <div className={classes.buttons}>
        <ButtonText
          href="mailto: abc@example.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          email
        </ButtonText>
        <ButtonText
          href="https://github.com/yigittuncel"
          target="_blank"
          rel="noreferrer noopener"
        >
          github
        </ButtonText>
        <ButtonText
          href="https://linkedin.com/in/yigit-tuncel"
          target="_blank"
          rel="noreferrer noopener"
        >
          linkedin
        </ButtonText>
      </div>
    </div>
  );
};

export default Contact;
