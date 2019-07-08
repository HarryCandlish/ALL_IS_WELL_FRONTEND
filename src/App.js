import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <Provider store={store}>
      <Nav />
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </Provider>
  );
}

export default App;
