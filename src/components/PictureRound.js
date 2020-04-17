import React, { Component } from "react";
import IndividualPicture from "./IndividualPicture";
import { Animated } from "react-animated-css";

export default class PictureRound extends Component {
                 state = {
                   score: 0,
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
                                   updateScore={this.updateScore}
                                   key={image.path}
                                   image={image}
                                 />
                               );
                             })}
                           </div>
                           <p>{this.state.score} / 16</p>
                           <button
                             onClick={() => {
                               this.handleClick(this.state.toggled);
                             }}
                           >
                             Back
                           </button>
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
               }
