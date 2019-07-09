import React, { Component } from "react";
import storeStyles from "../modules/store.module.scss";

import { connect } from "react-redux";

class Store extends Component {
  render() {
    return (
      <div>
        <h1 className={storeStyles.title}>Store</h1>
        <ol>
          {this.props.products.map(products => (
            <li key={products.id}>
              <p>{products.type}</p>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products.products
  };
}

export default connect(mapStateToProps)(Store);
