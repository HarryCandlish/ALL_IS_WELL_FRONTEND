import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Store from "./components/Store";

import { fetchProducts } from "./actions/productsAction";
import { fetchPhilosophy } from "./actions/philosophyAction";
import { connect } from "react-redux";

export class App extends Component {
  componentDidMount() {
    this.props.philosophy();
    this.props.products();
  }
  render() {
    return (
      <div>
        <Nav />
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="#/store" component={Store} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    philosophy: state.philosophy,
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    philosophy: () => dispatch(fetchPhilosophy()),
    products: () => dispatch(fetchProducts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
