import { Component } from "react";

import "./index.css";

class Counter extends Component {
  state = {
    count: 0,
  };
  onDec = () => {
    this.setState((prev) => {
      return {
        count: prev.count - 1,
      };
    });
  };
  onInc = () => {
    this.setState((prev) => {
      return {
        count: prev.count + 1,
      };
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div className="container  d-flex flex-column align-items-center justify-content-center">
        <div className="row">
          <div className="d-flex flex-column card p-5 align-items-center justify-content-center">
            {count >= 0 ? (
              <h1 className="text-primary mb-5">{`Count ${count}`}</h1>
            ) : (
              <h1 className="text-danger mb-5">{`Count ${count}`}</h1>
            )}
            <div>
              <button
                type="button"
                onClick={this.onInc}
                className="me -5 btn btn-success"
              >
                Increment
              </button>
              <button
                type="button"
                onClick={this.onDec}
                className="ms-5 btn btn-danger"
              >
                Decrement
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
