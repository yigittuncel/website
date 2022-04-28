import ButtonContained from '../components/UI/ButtonContained';
import classes from './Home.module.css'
import {AiOutlineFire} from 'react-icons/ai'
import ButtonOutlined from '../components/UI/ButtonOutlined';
import {BiRightArrowAlt} from 'react-icons/bi'
import {BiDownArrow} from 'react-icons/bi'
import Helmet from 'react-helmet';

const Home = () => {
  return (
    <>
    <div className={classes.home}>
      <Helmet>
        <title>Yigit Tuncel</title>
        <meta
          name="description"
          content="Hi everyone, this is my personal website. You can take a look at my projects and see how you contact to me."
        />
      </Helmet>
      <div className={classes.developer}>
        <h1>Hey, I am Yigit</h1>
        <p className={classes.paragraph}>the <span>front-end developer</span> you are looking for</p>
      </div>
      <div className={classes.product}>
        <p className={classes.paragraph}>Let`s create <span>amazing products</span> together!</p>
        <div className={classes.buttons}>
          <div className={classes.arrow}>
            <div className={classes.line}></div>
            <BiDownArrow />
            <ButtonContained to='/contact'>
              <AiOutlineFire />
              <p>Hire me!</p>
            </ButtonContained>
          </div>
          <ButtonOutlined to='/projects'>
            <p>See my projects</p>
            <BiRightArrowAlt />
          </ButtonOutlined>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home;
