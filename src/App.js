import { Fragment } from "react";
import { Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Navigation from "./components/Navigation";
import Layout from "./components/UI/Layout";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Layout>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Layout>
    </Fragment>
  );
}

export default App;
