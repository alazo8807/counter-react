import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [{ id: 1, value: 4 }, { id: 2, value: 0 }, { id: 3, value: 0 }]
  };

  handleDelete = counterId => {
    const newCounter = this.state.counters.filter(c => c.id !== counterId);
    console.log("here", newCounter);
    this.setState({ counters: newCounter });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters: counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters: counters });
  };

  handleDecrease = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;

    this.setState({ counters: counters });
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-secondary-btn-sm m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.state.counters.map(c => (
          <Counter
            key={c.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrease={this.handleDecrease}
            counter={c}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
