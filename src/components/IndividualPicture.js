import React, { Component } from "react";
const {getEditDistance} = require("../Utils/Utility");
// import { Animated } from "react-animated-css";

export default class IndividualPicture extends Component {
  state = {
    answer1: "",
    correct: '',
  };
  componentDidMount(){
    this.setState({correct: this.props.answered.includes(this.props.iteration) ? "✅" : null})
  }
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
        

          <button className="btn1" disabled={this.props.attempts === 0} type="submit">
           Attempts:  {this.props.attempts}
          </button>
          
          {this.props.answered.includes(this.props.iteration) ? <p>{this.state.correct}</p> : null}
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
      this.props.updateScore(this.props.iteration);
      return this.setState({ answer1: "", correct: "✅" });
    }
    this.props.changeAttempts(this.props.iteration)
    this.setState({ answer1: ''});
  };
}
