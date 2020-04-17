import React, { Component } from "react";
import { Howl} from "howler";
const {getEditDistance} = require("../Utils/Utility")

export default class IndividualMusicClip extends Component {
                 state = {
                   timesPlayed: 3,
                   answer:'',
                   correct: null,
                   attempts: 3,
                   answer1: ''
                 };
                 componentDidMount() {
                   const { id } = this.props.clip 
                   let vol = 1;
                    if(id <= 5) {
                      vol = 0.4
                    }
                    console.log(vol)
                   const thisHowl = new Howl({
                     src: [require(`../audio/Clip${id}.mp3`)],
                     autoplay: false,
                     loop: false,
                     volume: vol
                   });
                   return this.setState({ thisHowl });
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
                           disabled={this.state.attempts === 0}
                           type="submit"
                         >
                           Attempts: {this.state.attempts}
                         </button>

                         {this.state.correct ? (
                           <p>{this.state.correct}</p>
                         ) : null}
                       </form>
                     </div>
                   );
                 }
                 playClip = () => {
                   const { thisHowl, timesPlayed } = this.state;
                   if (
                     timesPlayed === 1 ||
                     timesPlayed === 2 ||
                     timesPlayed === 3
                   ) {
                     this.setState({ timesPlayed: timesPlayed - 1 });
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
                     this.props.updateScore();
                     return this.setState({ answer1: "", correct: "✅" });
                   }
                   this.setState({
                     attempts: this.state.attempts - 1,
                     answer1: ""
                   });
                 };
               }
