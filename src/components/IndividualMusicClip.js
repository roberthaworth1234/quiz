import React, { Component } from "react";
import { Howl} from "howler";
const {getEditDistance} = require("../Utils/Utility")

export default class IndividualMusicClip extends Component {
                 state = {
                  timesPlayed: 3,
                   answer:'',
                   correct: null,
                   
                   answer1: ''
                 };
                 componentDidMount() {
                   const { id } = this.props.clip 
                   let vol = 1;
                   if(id <= 5) {
                     vol = 0.4
                    }
                  
                    const thisHowl = new Howl({
                      src: [require(`../audio/Clip${id}.mp3`)],
                      autoplay: false,
                      loop: false,
                      volume: vol
                    });
                    return this.setState({ thisHowl, correct: this.props.answered.includes(this.props.iteration) ? "✅" : null  });
                  }
              
                 render() {
                   const { clip } = this.props;
                   return (
                     <div id="individ-music">
                       <p>{clip.id}.</p>
                       <button className='play'
                         onClick={() => {
                           this.playClip();
                         }}
                       >
                         ►
                       </button>
                       <form onSubmit={this.handleSubmit} type="submit">
                         <label>
                           <input
                             placeholder={this.props.clip.placeholder}
                             autoComplete="off"
                             onChange={this.handleChange}
                             id={clip.id}
                             value={this.state.answer1}
                           />
                         </label>

                         <button
                           className="btn1"
                           disabled={this.props.attempts === 0}
                           type="submit"
                         >
                           Attempts: {this.props.attempts}
                         </button>

                         {this.props.answered.includes(this.props.iteration) ? <p>{this.state.correct}</p> : null}
                       </form>
                     </div>
                   );
                 }
                 playClip = () => {
                   const { thisHowl } = this.state;
                   const { timesPlayed} = this.props;
                   if (
                     timesPlayed === 1 ||
                     timesPlayed === 2 ||
                     timesPlayed === 3
                   ) {
                     this.props.changePlayed(this.props.iteration);
                     return thisHowl.play();
                   }
                 };
                 handleChange = e => {
                   const { value } = e.target;
                   return this.setState({ answer1: value });
                 };
                 handleSubmit = e => {
                   e.preventDefault();
                   const { answer1 } = this.state;
                    const distance = getEditDistance(
                      answer1.toLowerCase(),
                      this.props.clip.answer
                    );
                   if (
                     distance <=1 &&
                     !this.state.correct
                   ) {
                     this.props.updateScore(this.props.iteration);
                     return this.setState({ answer1: "", correct: "✅" });
                   }
                   this.props.changeAttempts(this.props.iteration);
                   this.setState({
                     answer1: ""
                   });
                 };
               }
