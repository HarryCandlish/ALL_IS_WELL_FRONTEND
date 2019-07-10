import React, { Component } from "react";
import storeStyles from "../modules/store.module.scss";

import { connect } from "react-redux";

class Store extends Component {
  render() {
    return (
      <div>
        <h1 className={storeStyles.title}>Store</h1>
        <ol className={storeStyles.container}>
          {this.props.products.map(product => (
            <li className={storeStyles.flexbox} key={product.id}>
              <div className={storeStyles.titleBox}>
                <h2 className={storeStyles.type}>{product.type}</h2>
                <p className={storeStyles.storePara}>{product.size}</p>
                <p className={storeStyles.storePara}>{product.price}</p>
              </div>
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
