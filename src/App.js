import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";

import { fetchPhilosophy } from "./actions/philosophyAction";
import { connect } from "react-redux";

export class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.philosophy();
  }
  render() {
    return (
      <div>
        <Nav />
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    philosophy: state.philosophy
  };
};

const mapDispatchToProps = dispatch => {
  return {
    philosophy: () => dispatch(fetchPhilosophy())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
