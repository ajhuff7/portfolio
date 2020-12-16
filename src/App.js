import { Component } from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Portfolio from "../src/pages/Portfolio";
import Bio from "../src/pages/Bio";
import Contact from "../src/pages/Contact";



class App extends Component {

  render() {

    return (
      <HashRouter basename="/">
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/bio" component={Bio} />
          <Route path="/contact" component={Contact} />
        </div>
      </HashRouter>
    );
  }
}

export default App;

