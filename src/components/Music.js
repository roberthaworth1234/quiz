import React, { Component } from "react";
import { Animated } from "react-animated-css";
import IndividualMusicClip from "./IndividualMusicClip";

export default class Music extends Component {
                 state = {
                   attempts: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
                   music: [
                     {
                       id: 1,
                       path: "../audio/Clip1.mp3",
                       answer: "round the twist",
                       placeholder: "Type TV show",
                       guess: null
                     },
                     {
                       id: 2,
                       path: "../audio/Clip2.mp3",
                       answer: "captain planet",
                       placeholder: "Type TV show",
                       guess: null
                     },
                     {
                       id: 3,
                       path: "../audio/Clip3.mp3",
                       answer: "arthur",
                       placeholder: "Type TV show",
                       guess: null
                     },
                     {
                       id: 4,
                       path: "../audio/Clip4.mp3",
                       answer: "kenan and kel",
                       placeholder: "Type TV show",
                       guess: null
                     },
                     {
                       id: 5,
                       path: "../audio/Clip5.mp3",
                       answer: "saved by the bell",
                       placeholder: "Type TV show",
                       guess: null
                     },
                     {
                       id: 6,
                       path: "../audio/Clip6.mp3",
                       answer: "no limits",
                       placeholder: "Type song title",
                       guess: null
                     },
                     {
                       id: 7,
                       path: "../audio/Clip7.mp3",
                       answer: "crazy for you",
                       placeholder: "Type song title",
                       guess: null
                     },
                     {
                       id: 8,
                       path: "../audio/Clip8.mp3",
                       answer: "pocket full of sunshine",
                       placeholder: "Type song title",
                       guess: null
                     },
                     {
                       id: 9,
                       path: "../audio/Clip9.mp3",
                       answer: "rule the world",
                       placeholder: "Type song title",
                       guess: null
                     },
                     {
                       id: 10,
                       path: "../audio/Clip5.mp3",
                       answer: "about you now",
                       placeholder: "Type song title",
                       guess: null
                     }
                   ],
                   toggled: false,
                   score: 0
                 };

                 render() {
                   if (this.state.toggled === false) {
                     return (
                       <div className="rounds">
                         <img
                           alt="phones png"
                           className="image"
                           src={require("../Images/headphones.png")}
                         ></img>
                         Music
                         <button
                           className="btn"
                           onClick={() => {
                             this.handleClick(this.state.toggled);
                           }}
                         >
                           Start
                         </button>
                       </div>
                     );
                   } else {
                     return (
                       <Animated
                         className="game-screen1"
                         id="pic"
                         animationIn="fadeInDownBig"
                         animationOutDuration={1200}
                         isVisible={true}
                       >
                         <div className="game-screen" id="pic">
                           <h2 className="game-title">Music Round</h2>
                           <div className="wrap">
                             {this.state.music.map((clip, i) => {
                               return (
                                 <IndividualMusicClip
                                 changeAttempts={this.changeAttempts}
                                 iteration={i}
                                   attempts={this.state.attempts[i]}
                                   updateScore={this.updateScore}
                                   clip={clip}
                                   key={clip.id}
                                 />
                               );
                             })}
                           </div>
                           <p>Music Score - {this.state.score} / 10</p>
                           {/* <button
                             onClick={() => {
                               this.handleClick(this.state.toggled);
                             }}
                           > */}
                           <div
                             onClick={() => {
                               this.handleClick(this.state.toggled);
                             }}
                             className="backBtn"
                           >
                             <span className="line tLine"></span>
                             <span className="line mLine"></span>
                             <span className="label">Back to Homepage</span>
                             <span className="line bLine"></span>
                           </div>
                           {/* </button> */}
                         </div>
                       </Animated>
                     );
                   }
                 }
                 handleClick = arg => {
                   this.setState({ toggled: !arg });
                 };
                 updateScore = () => {
                   const { score } = this.state;
                   return this.setState({ score: score + 1 });
                 };
                 changeAttempts = iteration => {
                   this.setState(currentState => {
                     return {
                       attempts: currentState.attempts.map((attempt, i) => {
                         return i === iteration ? attempt - 1 : attempt;
                       })
                     };
                   });
                 };
               }
