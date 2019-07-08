import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPhilosophy } from "../actions/philosophyAction";

class Philosophy extends Component {
  componentWillMount() {
    this.props.fetchPhilosophy();
  }
  render() {
    const philosophyPhilosophy = this.props.philosophy.map(philosophy => (
      <div key={philosophy.id}>
        <h1>{philosophy.title}</h1>
      </div>
    ));
    return (
      <div>
        <h1>Our Philosophy</h1>
        {philosophyPhilosophy}
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
