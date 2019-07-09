import React, { Component } from "react";
import storeStyles from "../modules/store.module.scss";
import { connect } from "react-redux";

class Store extends Component {
  render() {
    return (
      <div>
        <h1 className={storeStyles.title}>Store</h1>
        <ul className={storeStyles.container}>
          {this.props.products.map(product => (
            <li className={storeStyles.flexbox} key={product.id}>
              <h2>{product.type}</h2>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products.product
  };
}

export default connect(mapStateToProps)(Store);
