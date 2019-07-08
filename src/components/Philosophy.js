import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPhilosophy } from "../actions/philosophyAction";
import philosophyStyles from "../modules/philosophy.module.scss";

class Philosophy extends Component {
  componentWillMount() {
    this.props.fetchPhilosophy();
  }
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

const mapStateToProps = state => ({
  philosophy: state.philosophy.philosophy
});

export default connect(
  mapStateToProps,
  { fetchPhilosophy }
)(Philosophy);
