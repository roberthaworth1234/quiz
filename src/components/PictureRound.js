import React, { Component } from "react";
import IndividualPicture from "./IndividualPicture";
import { Animated } from "react-animated-css";

export default class PictureRound extends Component {
                 state = {
                   score: 0,
                   attempts : [3, 3, 3, 3, 3, 3, 3,3,3,3,3,3,3,3,3,3] ,
                   answered: [],
                   images: [
                     {
                       id: 1,
                       path: "pic1",
                       answer: "brooke shields",
                       guess: null
                     },
                     {
                       id: 2,
                       path: "pic2",
                       answer: "neil patrick harris",
                       guess: null
                     },
                     {
                       id: 3,
                       path: "pic3",
                       answer: "amy winehouse",
                       guess: null
                     },
                     { id: 4, path: "pic4", answer: "hugh grant", guess: null },
                     {
                       id: 5,
                       path: "pic5",
                       answer: "james dean",
                       guess: null
                     },
                     { id: 6, path: "pic6", answer: "bjork", guess: null },
                     {
                       id: 7,
                       path: "pic7",
                       answer: "jennifer aniston",
                       guess: null
                     },
                     { id: 8, path: "pic8", answer: "adele", guess: null },
                     {
                       id: 9,
                       path: "pic9",
                       answer: "ryan gosling",
                       guess: null
                     },
                     {
                       id: 10,
                       path: "pic10",
                       answer: "hilary duff",
                       guess: null
                     },
                     {
                       id: 11,
                       path: "pic11",
                       answer: "cindy crawford",
                       guess: null
                     },
                     { id: 12, path: "pic12", answer: "tyra banks", guess: null },
                     {
                       id: 13,
                       path: "pic13",
                       answer: "gwen stefani",
                       guess: null
                     },
                     { id: 14, path: "pic14", answer: "salma hayek", guess: null },
                     {
                       id: 15,
                       path: "pic15",
                       answer: "carrie underwood",
                       guess: null
                     },
                     {
                       id: 16,
                       path: "img1",
                       answer: "robbie williams",
                       guess: null
                     }
                   ],
                   toggled: false
                 };
                 render() {
                   if (this.state.toggled === false) {
                     return (
                       <div className="rounds">
                         <img
                           alt="frame png"
                           className="image"
                           src={require("../Images/frame.png")}
                         ></img>
                         Picture
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
                           <h2 className="game-title"> Picture Round</h2>
                           <div className="wrap">
                             {this.state.images.map((image, i) => {
                               return (
                                 <IndividualPicture
                                    answered={this.state.answered}
                                   changeAttempts={this.changeAttempts}
                                   attempts={this.state.attempts[i]}
                                   updateScore={this.updateScore}
                                   key={image.path}
                                   iteration={i}
                                   image={image}
                                 />
                               );
                             })}
                           </div>
                           <p>Picture Score {this.state.score} / 16</p>
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
                         </div>
                       </Animated>
                     );
                   }
                 }
                 handleClick = arg => {
                   this.setState({ toggled: !arg });
                 };
                 updateScore = (iteration) => {
                   const { score,answered } = this.state;
                  if(!answered.includes(iteration)) {
                    return this.setState({ score: score + 1, answered: [...answered, iteration] });
                  }
                 };
                 changeAttempts = (iteration) =>{
                   this.setState((currentState)=> {
                    return { attempts: currentState.attempts.map((attempt,i) => {
                     return i === iteration ? attempt -1 : attempt
                    })}
                   })
                 }
               }
