import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation/Navigation";
import Layout from "./components/UI/Layout";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Projects from "./pages/Projects";
import classes from "./App.module.css";
import ProjectDetail from './pages/ProjectDetail'
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className={classes["main-div"]}>
      <Navigation />
      <Switch>
        <Layout>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/projects/:projectId">
            <ProjectDetail />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Layout>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
