import React, { Component } from "react";

import productStyles from "../modules/product.module.scss";

class Product extends Component {
  render() {
    return (
      <div className={productStyles.banner}>
        <h2 className={productStyles.title}>Our Product</h2>
        <p className={productStyles.epigraph}>
          A clothing line that distributes clothing promoting mental health
          awareness, check out our store. Everything in our store is produced
          locally. The Shirts are made with reused fabric and are
          environmentally friendly. On each item of clothing there appears our
          slogan promoting well-being and the conception of overcoming.
        </p>
        <a href="/">
          <h1 className={productStyles.store}>Store</h1>
        </a>
      </div>
    );
  }
}

export default Product;
