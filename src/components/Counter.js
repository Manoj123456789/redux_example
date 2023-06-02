import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_COUNTER, MIN_COUNTER, RESET_COUNTER } from "../actionTypes/config";

class Counter extends Component {
  add = () => {
    this.props.dispatch({ type: ADD_COUNTER });
  };

  less = () => {
    this.props.dispatch({ type: MIN_COUNTER });
  };

  reset = () => {
    this.props.dispatch({ type: RESET_COUNTER });
  };

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={this.add}
        >
          +
        </button>
        <br></br>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={this.less}
        >
          -
        </button>
        <br></br>
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={this.reset}
        >
          reset to 100
        </button>
        <br></br>
        <br></br>
        <h1>counter : {this.props.count}</h1>
      </div>
    );
  }
}
//connects component with redux store state
const state = (state) => {
  console.log(state);
  return { count: state.counterApp.counter };
};

//connect function INJECTS dispatch function as a prop!!
export default connect(state)(Counter);
