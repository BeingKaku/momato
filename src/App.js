import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import CardDetail from "./components/pages/Card/CardDetail";
import Brand from "./components/pages/IndividualBrand/Brand";
import Landing from "./components/pages/LandingPage/Landing";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/card/:category" component={CardDetail} />
        <Route path="/card/:category/:item" component={Brand} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
