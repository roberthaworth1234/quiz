import React, { Component } from 'react'
import PictureRound from "./components/PictureRound";
import GeneralKnowledge from "./components/GeneralKnowledge";
import FilmAndTV from "./components/FilmAndTv";
import Music from "./components/Music";
import Knockout from "./components/Knockout";
import Header from "./components/Header";
import Ainslie from './components/Ainslie'
import Konami from "react-konami-code"

import "./App.css";

export default class App extends Component {
                 easterEgg = () => {
                   alert("Hey, you typed the Konami Code!");
                 };
                 state = {
                   generalQuestions: [
                     {
                       id: 0,
                       q: "Who married Justin Bieber in Sept 2018?",
                       guess1: "Hailey Baldwin",
                       guess2: "Camila Cabello",
                       guess3: "Leslie Nielson",
                       guess4: "Hayley Martinez"
                     },
                     {
                       id: 1,
                       q: "Which newspaper was founded in Manchester in 1821?",
                       guess1: "Liverpool Eco",
                       guess2: "Manchester Evening News",
                       guess3: "Guardian",
                       guess4: "Daily Post"
                     },
                     {
                       id: 2,
                       q:
                         "Developed so that it can last for up to a year, what type of fruit is a Cosmic Crisp?",
                       guess1: "Apple",
                       guess2: "Bannana",
                       guess3: "Grape",
                       guess4: "Tomato"
                     },
                     {
                       id: 3,
                       q:
                         "If you are 86 miles from Southampton, 131 miles from London (Trafalgar Square) and 87 miles from Shrewsbury. Where are you?",
                       guess1: "Colchester",
                       guess2: "Exeter",
                       guess3: "Cardiff",
                       guess4: "Birmingham"
                     },
                     {
                       id: 4,
                       q:
                         "Car Manufacturing plant located in Halewood, Liverpool?",
                       guess1: "Mercedes-Benz",
                       guess4: "Jaguar Land Rover",
                       guess2: "Bentley",
                       guess3: "Rolls Royce"
                     },
                     {
                       id: 5,
                       q:
                         "The countryside of Yorkshire has acquired which common nickname?",
                       guess1: "Land of Blue Sky",
                       guess2: "Gods Own Country",
                       guess3: "The Great Whippet Walk",
                       guess4: "The Emerald Sea"
                     },
                     {
                       id: 6,
                       q:
                         "What was advertised as 'helps you work, rest and play'",
                       guess1: "Hubba Bubba",
                       guess2: "Mars",
                       guess3: "Pepsi",
                       guess4: "Tetley"
                     },
                     {
                       id: 7,
                       q:
                         "England won the 2019 Cricket World Cup, but at which ground was the final played?",
                       guess1: "Lord's",
                       guess2: "Edgbaston",
                       guess3: "The Oval",
                       guess4: "Old Trafford"
                     },
                     {
                       id: 8,
                       q: "What was the initial name of the pop band the Spice Girls?",
                       guess1: "Spicy",
                       guess2: "Geri and the Pacemakers",
                       guess3: "Touch",
                       guess4: "Unity"
                     },
                     {
                       id: 9,
                       q: "What is the chemical symbol for Silver?",
                       guess1: "Au",
                       guess2: "Si",
                       guess3: "Sl",
                       guess4: "Ag"
                     },
                     {
                       id: 10,
                       q: "END OF QUIZZ",
                       guess1: "GO",
                       guess2: "AWAY",
                       guess3: "😄"
                     }
                   ],
                   filmQuestions: [
                     {
                       id: 0,
                       q: "Who Directed the Film Memento",
                       guess1: "Darren Aronofsky",
                       guess2: "Guy Pearce",
                       guess3: "Christopher Nolan",
                       guess4: "Francis Ford Coppola"
                     },
                     {
                       id: 1,
                       q: "What was Chandler's middle name in the sitcom Friends?",
                       guess1: "Ainsley",
                       guess2: "Bing",
                       guess3: "Muriel",
                       guess4: "Meredith"
                     },
                     {
                       id: 2,
                       q: "William Moreland is a popular character from which of these TV series?",
                       guess1: "Buffy",
                       guess2: "Breaking Bad",
                       guess3: "Angel",
                       guess4: "The Wire"
                     },
                     {
                       id: 3,
                       q: "Which of these Films were not directed by Darren Aronofsky",
                       guess1: "The Wrestler",
                       guess2: "Mother!",
                       guess3: "Pi",
                       guess4: "The Illusionist"
                     },
                     {
                       id: 4,
                       q: "Neil Flynn portrays which character in Scrubs?",
                       guess1: "Ted",
                       guess2: "Perry Cox",
                       guess3: "Bob Kelso",
                       guess4: "Janitor"
                     },
                     {
                       id: 5,
                       q: "Who is the DI (Detective Inspector), at AC12, in Season 5 of Line of Duty",
                       guess1: "Steve Arnott",
                       guess2: "Kate Fleming",
                       guess3: "Ted Hastings",
                       guess4: "Maneet Bindra"
                     },
                     {
                       id: 6,
                       q: "'My name is Inigo Montoya. You killed my father...Prepare to die'. This a line from which cult classic film",
                       guess1: "The Never Ending Story",
                       guess2: "The Princess Bride",
                       guess3: "Labyrinth",
                       guess4: "Star Wars"
                     },
                     {
                       id: 7,
                       q: "In the 1990 Film Teenage Mutant Hero Turtles. Who plays the voice of Donatello?",
                       guess1: "Keifer Sutherland",
                       guess2: "River Pheonix",
                       guess3: "Corey Feldman",
                       guess4: "Josh Brolin"
                     },
                     {
                       id: 8,
                       q: "In the 1991 film 'Hook', who played Granny Wendy?",
                       guess1: "Yo",
                       guess2: "no",
                       guess3: "woohoo"
                     },
                     {
                       id: 2,
                       q: "tell me the?",
                       guess1: "Yo",
                       guess2: "no",
                       guess3: "woohoo"
                     },
                     {
                       id: 2,
                       q: "END OF GENERALAL QUIZZ",
                       guess1: "GO",
                       guess2: "AWAY",
                       guess3: "😄"
                     }
                   ],
                   storedAnswers: [],
                   answers: [
                     "Hailey Baldwin",
                     "Guardian",
                     "Apple",
                     "Cardiff",
                     "Jaguar Land Rover",
                     "Gods Own Country",
                     "Mars",
                     "Lord's",
                     "Touch",
                     "Ag"
                   ],
                   showGenAnswers: false,
                   showFilmAnswers: false,
                   filmAnswers: ["Yo"],
                   storedFilmAnswers: []
                 };
                 easterEgg = () => {
                   alert("Hey, you typed the Konami Code!");
                 };
                 render() {
                   return (
                     <div className="App">
                       <Header />

                       <Konami action={this.easterEgg}>
                         <Ainslie />
                       </Konami>

                       <div className="Applink">
                         <PictureRound />
                         <GeneralKnowledge
                           storedAnswers={this.state.storedAnswers}
                           showGenAnswers={this.state.showGenAnswers}
                           storeAnswers={this.storeAnswers}
                           answers={this.state.answers}
                           questions={this.state.generalQuestions}
                         />
                         <Music />
                         <FilmAndTV
                           storedFilmAnswers={this.state.storedFilmAnswers}
                           showFilmAnswers={this.state.showFilmAnswers}
                           storeAnswers={this.storeAnswers}
                           answers={this.state.filmAnswers}
                           questions={this.state.filmQuestions}
                         />
                         {/* <Knockout /> */}
                       </div>
                     </div>
                   );
                 }
                 storeAnswers = (answer, type) => {
                   const { storedAnswers, storedFilmAnswers } = this.state;
                   if (type === "Gen") {
                     if (storedAnswers.length < 10) {
                       this.setState(currentState => {
                         return {
                           storedAnswers: [
                             ...currentState.storedAnswers,
                             answer
                           ],
                           showGenAnswers:
                             currentState.storedAnswers.length >= 9
                               ? true
                               : false
                         };
                       });
                     }
                   }
                   if (type === "Film") {
                     if (storedFilmAnswers.length < 10) {
                       this.setState(currentState => {
                         return {
                           storedFilmAnswers: [
                             ...currentState.storedFilmAnswers,
                             answer
                           ],
                           showFilmAnswers:
                             currentState.storedFilmAnswers.length >= 9
                               ? true
                               : false
                         };
                       });
                     }
                   }
                 };
               }


