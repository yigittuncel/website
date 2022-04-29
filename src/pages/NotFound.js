import classes from './NotFound.module.css'
import Helmet from 'react-helmet';

const NotFound = () => {
  return (
    <div className={classes['not-found']}>
      <Helmet>
        <title>Yigit Tuncel | 404</title>
        <meta name="description" content="The page you are looking for doesn't exist."/>
      </Helmet>
      <p>404</p>
      <p>Page not found</p>
    </div>
  )
}

export default NotFound;
