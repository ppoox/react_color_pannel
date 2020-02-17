import React, { Component } from "react";
import { connect } from "react-redux";
import ColorList from "../components/ColorList";
import * as colorListActions from "../store/modules/colorList";
import * as counterActions from "../store/modules/counter";
import { bindActionCreators } from "redux";

class ColorListContainer extends Component {
  render() {
    const { input, list, ColorListActions, CounterActions } = this.props;
    return (
      <ColorList
        input={input}
        list={list}
        ColorListActions={ColorListActions}
        CounterActions={CounterActions}
      />
    );
  }
}

const mapStateToProps = ({ colorList }) => ({
  input: colorList.input,
  list: colorList.list
});

const mapDispatchToProps = dispatch => ({
  ColorListActions: bindActionCreators(colorListActions, dispatch),
  CounterActions: bindActionCreators(counterActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorListContainer);
