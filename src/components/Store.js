import React, { Component } from "react";
import storeStyles from "../modules/store.module.scss";

class Store extends Component {
  render() {
    return (
      <div>
        <h1 className={storeStyles.title}>Store</h1>
      </div>
    );
  }
}

export default Store;
