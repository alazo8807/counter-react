import React, { Component } from "react";

class Counter extends Component {
  state = {};

  render() {
    const { counter } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-1">
            <span className={this.getBadgeClasses()}>
              {this.formatCounter()}
            </span>
          </div>
          <div className="col-sm-11">
            <button
              className="btn btn-primary btn-sm m-1"
              onClick={() => {
                this.props.onIncrement(counter);
              }}
            >
              +
            </button>
            <button
              className="btn btn-primary btn-sm m-1"
              onClick={() => {
                this.props.onDecrease(counter);
              }}
              disabled={counter.value == 0 && true}
            >
              -
            </button>
            <button
              className="btn btn-danger btn-sm m-1"
              onClick={() => {
                this.props.onDelete(counter.id);
              }}
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  }

  formatCounter() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
