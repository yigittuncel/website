import { Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";

function App() {
  return (
    <div>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/work">
        <Work />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </div>
  );
}

export default App;
