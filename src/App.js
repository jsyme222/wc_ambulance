// import logo from "./logo.svg";
import "./App.scss";
import PageFrame from "./js/components/page-frame/page-frame";
import { Route, Switch } from "react-router-dom";
import Home from "./js/components/pages/home";
import Services from "./js/components/pages/services";
import About from "./js/components/pages/about";
import Contact from "./js/components/pages/contact";

function App() {
  return (
    <div className="App">
        <PageFrame>
          <Switch>
            <Route exact path={"/"}>
              <Home />
            </Route>
            <Route exact path={"/services"}>
              <Services />
            </Route>
            <Route exact path={"/about"}>
              <About />
            </Route>
            <Route exact path={"/contact"}>
              <Contact />
            </Route>
          </Switch>
        </PageFrame>
    </div>
  );
}

export default App;
