import React, { Component } from "react";
const {getEditDistance} = require("../Utils/Utility");
// import { Animated } from "react-animated-css";

export default class IndividualPicture extends Component {
  state = {
    attempts: 3,
    answer1: "",
    correct: null
  };
  render() {
    const { image } = this.props;
    return (
      <div id="individ-pic">
        <img
          className="photoround"
          src={require(`../Images/${image.path}.jpg`)}
          alt="famous person"
        ></img>
        <form onSubmit={this.handleSubmit} type="submit">
          <label>
            <input
              placeholder="Full Name Here..."
              autoComplete="off"
              onChange={this.handleChange}
              id={image.path}
              value={this.state.answer1}
            />
          </label>
        

          <button className="btn1" disabled={this.state.attempts === 0} type="submit">
           Attempts:  {this.state.attempts}
          </button>
          
          {this.state.correct ? <p>{this.state.correct}</p> : null}
        </form>
      </div>
    );
  }
  handleChange = e => {
    const { value } = e.target;
    return this.setState({ answer1: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { answer1 } = this.state;
    const distance = getEditDistance(answer1.toLowerCase(), this.props.image.answer)
    if (
      distance <= 1 && !this.state.correct
    ) {
      this.props.updateScore();
      return this.setState({ answer1: "", correct: "✅" });
    }
    this.setState({ attempts: this.state.attempts - 1, answer1: ''});
  };
}
