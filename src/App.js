import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Layout from "./components/UI/Layout";
import Footer from "./components/Footer/Footer";

import classes from "./App.module.css";
import NotFound from "./pages/NotFound";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Projects = React.lazy(() => import("./pages/Projects"));
const ProjectDetail = React.lazy(() => import("./pages/ProjectDetail"));

function App() {
  return (
    <div className={classes["main-div"]}>
      <Navigation />
      <Layout>
        <Suspense fallback={<p>Loading</p>}>
          <Switch>
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
          </Switch>
        </Suspense>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
