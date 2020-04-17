import React, { Component } from "react";
import { Howl } from "howler";
import { Animated } from "react-animated-css";

export default class Ainslie extends Component {
  componentDidMount() {
    const thisHowl = new Howl({
      src: [require(`../audio/Ainsley.mp3`)],
      autoplay: false,
      loop: false,
      volume: 1
    })

    return this.setState({ thisHowl });
  }
  playSound = () => {
    return this.state.thisHowl.play()
  }
  render() {
    return (
      <Animated
        animationIn="fadeInDownBig"
        animationOutDuration={1500}
        isVisible={true}
      >
        <p>Just for my special boys</p>
       <button onClick={()=>{this.state.thisHowl.play()}}>Click Me</button>
        <img
          className="ainsley"
          src={require("../Images/Ainsley_Harriott.png")}
          alt="Ainsley Harriott"
        />
        <img
          className="ainshead"
          src={require("../Images/ainshead.png")}
          alt="Ainsley Harriott Head"
        />
      </Animated>
    );
  }
}
