import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPhilosophy } from "../actions/philosophyAction";

class Philosophy extends Component {
  componentWillMount() {
    this.props.fetchPhilosophy();
  }
  render() {
    return (
      <div>
        <h1>Our Philosophy</h1>
        <ol>
          {this.props.philosophy.map(philosophy => (
            <li key={philosophy.id}>
              <h1>{philosophy.title}</h1>
              <p>{philosophy.description}</p>
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
