import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Layout from "./components/UI/Layout";
import Footer from "./components/Footer/Footer";

import classes from "./App.module.css";
import NotFound from "./pages/NotFound";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";


function App() {
  return (
    <div className={classes["main-div"]}>
      <Navigation />
      <Layout>
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
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
