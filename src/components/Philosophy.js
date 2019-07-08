import React, { Component } from "react";
import philosophyStyles from "../modules/philosophy.module.scss";
import { connect } from "react-redux";

class Philosophy extends Component {
  render() {
    return (
      <div>
        <div className={philosophyStyles.banner}>
          <h1 className={philosophyStyles.title}>Our Philosophy</h1>
          <p className={philosophyStyles.epigraph}>
            We believe that every company, to continue to move forward, must
            have a philosophy. Our philosophy promotes the dignity and courage
            it takes to fight mental illness. It's the belief that life will be
            better and that this is a fight we are able to win.
          </p>
        </div>
        <ol className={philosophyStyles.container}>
          {this.props.philosophy.map(philosophy => (
            <li className={philosophyStyles.flexbox} key={philosophy.id}>
              <div className={philosophyStyles.titleDiv}>
                <h1 className={philosophyStyles.flexTitle}>
                  {philosophy.title}
                </h1>
              </div>
              <p className={philosophyStyles.flexPara}>
                {philosophy.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    philosophy: state.philosophy.philosophy
  };
}

export default connect(mapStateToProps)(Philosophy);
