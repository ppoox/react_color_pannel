import React, { Component } from "react";
import Counter from "../components/Counter";
import { connect } from "react-redux";
//import { increment, decrement } from "../store/modules/counter";
import * as CounterActions from "../store/modules/counter";
import { bindActionCreators } from "redux";

class CounterContainer extends Component {
  render() {
    const { number, CounterActions, color } = this.props;
    return (
      <Counter
        color={color}
        number={number}
        increment={CounterActions.increment}
        decrement={CounterActions.decrement}
      />
    );
  }
}

const mapStageToProps = state => ({
  number: state.counter.number,
  color: state.counter.color
});

const mapDispatchToProps = dispatch => ({
  //   increment: () => dispatch(increment()),
  //   decrement: () => dispatch(decrement())
  CounterActions: bindActionCreators(CounterActions, dispatch)
});

// const mapDispatchToProps = {
//   increment,
//   decrement
// };

export default connect(
  mapStageToProps,
  mapDispatchToProps
)(CounterContainer);
