import classes from "./Layout.module.css";

const Layout = (props) => {
  const cssClasses = classes.layout;

  return <div className={cssClasses}>{props.children}</div>;
};

export default Layout;
