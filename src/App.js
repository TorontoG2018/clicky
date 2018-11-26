
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import president from "./presidents.json";
import "./App.css";


class App extends Component {
  state = {
    president,
    clickedPresident: [],
    score: 0
  };

  imageClick = event => {
    const currentPresident = event.target.alt;
    const PresidentAlreadyClicked =
      this.state.clickedPresident.indexOf(currentPresident) > -1;


    if (PresidentAlreadyClicked) {
      this.setState({
        fish: this.state.president.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedPresident: [],
        score: 0
      });
        alert("Game Over. Do you want to play again?");


    } else {
      this.setState(
        {
          president: this.state.president.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedPresident: this.state.clickedPresident.concat(
            currentPresident
          ),
          score: this.state.score + 1
        },
        
        () => {
          if (this.state.score === 12) {
            alert("Congratulations! You Win!");
            this.setState({
              fish: this.state.president.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedPresident: [],
              score: 0
            });
          }
        }
      );
    }
  };


  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.president.map(president => (
            <FriendCard
              imageClick={this.imageClick}
              id={president.id}
              key={president.id}
              image={president.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;