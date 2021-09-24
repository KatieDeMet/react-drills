import React, { Component } from 'react'
import {Switch, Route, Link} from "react-router-dom";
import Products from './Products';
import Product from "./Product";

export default class App extends Component {
  render() {
    return (
      <div>
      <nav>
        <p><Link to="/">Home</Link></p>
      </nav>
      <Switch>
        <Route exact path="/" component={Products}></Route>
        <Route path="/product/:id" component={Product}></Route>
      </Switch>
      </div>
    )
  }
}
