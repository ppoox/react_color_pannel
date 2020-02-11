import React, { Component } from "react";
import { connect } from "react-redux";
import ColorList from "../components/ColorList";
import * as colorListActions from "../store/modules/colorList";
import * as counterAcions from "../store/modules/counter";
import { bindActionCreators } from "redux";

class ColorListContainer extends Component {
  render() {
    const { input, list, ColorListActions, CounterACtions } = this.props;
    return (
      <ColorList
        input={input}
        list={list}
        ColorListActions={ColorListActions}
        CounterACtions={CounterACtions}
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
  CounterACtions: bindActionCreators(counterAcions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorListContainer);
