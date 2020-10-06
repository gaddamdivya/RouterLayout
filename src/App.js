import React from "react";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Page1 from "./Components/Pages/Page1";
import MainLayout from "./Components/Layouts/MainLayout";
import Layout2 from "./Components/Layouts/Layout2";
import LayoutRoute from "./Components/Layouts/LayoutRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <LayoutRoute component={Home} path="/" exact layout={Layout2} />
          <LayoutRoute
            component={Contact}
            path="/contact"
            exact
            layout={Layout2}
          />
          <LayoutRoute
            component={About}
            path="/about"
            exact
            layout={MainLayout}
          />
          <Route
            path="/test"
            exact
            render={(matchingProps) => {
              return <div>hello world</div>;
            }}
          />
          <Route
            path="/test2"
            exact
            render={(matchingProps) => {
              return <About {...matchingProps} />;
            }}
          />
          <Route
            path="/page1"
            exact
            render={(matchingProps) => {
              return <Page1 {...matchingProps} />;
            }}
          />
        </Switch>
        <hr />
      </div>
    </Router>
  );
}
export default App;
