import React from 'react';
import './App.css';
import Home from "./Home";
import Details from './Details';
import SignUp from './SignUp';
import { Switch, Route, Link } from "react-router-dom";


class App extends React.Component {

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/details">Details</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>  

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Details} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    )
  }
}

export default App;
