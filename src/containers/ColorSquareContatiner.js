import React, { Component } from "react";
import ColorSquare from "../components/ColorSquare";
import { connect } from "react-redux";
import { changeColor } from "../store/modules/counter";

class ColorSquareContatiner extends Component {
  render() {
    const { color, number, changeColor } = this.props;
    return (
      <ColorSquare selected={color} number={number} onSelect={changeColor} />
    );
  }
}

const mapStateToProps = ({ counter: { color, number } }) => ({
  color,
  number
});

const mapDispatchToProps = dispatch => ({
  changeColor: color => dispatch(changeColor(color))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorSquareContatiner);
