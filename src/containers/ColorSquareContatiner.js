import React, { Component } from "react";
import ColorSquare from "../components/ColorSquare";
import { connect } from "react-redux";
import { change_color } from "../store/modules/counter";

class ColorSquareContatiner extends Component {
  render() {
    const { color, number, change_color } = this.props;
    return (
      <ColorSquare selected={color} number={number} onSelect={change_color} />
    );
  }
}

const mapStateToProps = ({ counter: { color, number } }) => ({
  color,
  number
});

const mapDispatchToProps = dispatch => ({
  change_color: color => dispatch(change_color(color))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorSquareContatiner);
