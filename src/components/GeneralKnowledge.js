import React, { Component } from "react";
import GenAnswers from "./GenAnswers";
import { Animated } from "react-animated-css";

export default class GeneralKnowledge extends Component {
  state = {
    toggled: false,
    questionNumber: 0,
    animation: "bounceInLeft",
    visible: true,
    genVisible: true,
    isCorect: null,
    notCorrect: null,
    answersToggled: false
  };

  renderAnswers=()=>{
      return this.setState({ answersToggled: !this.state.answersToggled });
  }

  render() {
    if (this.state.answersToggled) {
      return <GenAnswers renderAnswers={this.renderAnswers} storedAnswers={this.props.storedAnswers} answers={this.props.answers} />;
    } else if (this.state.toggled === false) {
      return (
        <div className="rounds">
          <img
            className="image"
            alt="rubix cube"
            src={require("../Images/rubix.png")}
          ></img>
          General Knowledge
          <button
            className="btn"
            onClick={() => {
              this.handleClick(this.state.toggled);
            }}
          >
            Start
          </button>
          {this.props.showGenAnswers ? (
            <button
              className="btn"
              onClick={() => {
                this.renderAnswers();
              }}
            >
              Answers
            </button>
          ) : null}
        </div>
      );
    } else {
      const questions = this.props.questions;
      const questionNumber = this.state.questionNumber;
      const question = questions.filter((question, i) => {
        return i === questionNumber ? question : null;
      });
      return (
        <Animated
          className="game-screen"
          animationIn="rotateInDownLeft"
          animationOut="rollOut"
          animationOutDuration={2000}
          isVisible={this.state.genVisible}
        >
          <div className="game-screen">
            <h2 className="game-title">General Knowledge</h2>
            {question.map((item, i) => {
              return (
                <Animated
                  id="game-card"
                  key={item.id}
                  animationIn={this.state.animation}
                  animationOut="fadeOut"
                  animationOutDuration={1500}
                  isVisible={this.state.visible}
                >
                  <p>{item.q}</p>
                  <button
                    className="button button1"
                    onClick={() => {
                      this.handleAnswer(item.guess1);
                    }}
                  >
                    {item.guess1}
                  </button>
                  <button
                    className="button button2"
                    onClick={() => {
                      this.handleAnswer(item.guess2);
                    }}
                  >
                    {item.guess2}
                  </button>
                  <button
                    className="button button3"
                    onClick={() => {
                      this.handleAnswer(item.guess3);
                    }}
                  >
                    {item.guess3}
                  </button>
                  <button
                    className="button button4"
                    onClick={() => {
                      this.handleAnswer(item.guess4);
                    }}
                  >
                    {item.guess4}
                  </button>
                  {this.state.isCorrect ? (
                    <p className="right-answer">YEAAH</p>
                  ) : null}
                  {this.state.notCorrect ? (
                    <p className="wrong-answer">BOOO X</p>
                  ) : null}
                </Animated>
              );
            })}
            <div
              onClick={() => {
                this.handleClick(this.state.toggled);
              }}
              class="backBtn"
            >
              <span class="line tLine"></span>
              <span class="line mLine"></span>
              <span class="label">Back to Homepage</span>
              <span class="line bLine"></span>
            </div>
          </div>
        </Animated>
      );
    }
  }

  handleClick(arg) {
    this.setState({ toggled: !arg });
  }
  handleAnimation(guess) {
    const answers = this.props.answers;
    const questionNumber = this.state.questionNumber;
    setTimeout(() => {
      if (questionNumber === 9) {
        return this.setState({ toggled: true });
      } else if (questionNumber % 2 === 0) {
        return this.setState({
          questionNumber: this.state.questionNumber + 1,
          animation: "bounceInRight",
          isCorrect: false,
          notCorrect: false,
          visible: true
        });
      } else if (questionNumber % 2 === 1) {
        return this.setState({
          questionNumber: this.state.questionNumber + 1,
          animation: "bounceInLeft",
          isCorrect: false,
          notCorrect: false,
          visible: true
        });
      }
    }, 1500);
    if (questionNumber !== 9 && answers[this.state.questionNumber] !== guess) {
      return this.setState({ notCorrect: true, visible: false, });
    } else return this.setState({ isCorrect: true, visible: false});
  }
  handleAnswer(guess) {
    this.props.storeAnswers(guess, "Gen");
    this.handleAnimation(guess);
  }
}
