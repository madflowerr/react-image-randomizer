import React from "react";
import Image from "./Image";
import seedData from "./discography.json";

console.log(seedData);
let discography = seedData;
console.log(discography);

class Imagebox extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      goMessage: "Good Luck!",
      theClicked: []
    };
    this.scoreUp = this.scoreUp.bind(this);
    this.gameOver = this.gameOver.bind(this);
  }
  // function that handles onclick stuff

  // function that handles score
  scoreUp() {
    this.setState(state => {
      return { score: state.score + 1 };
    });
    this.shuffleImages();
  }
  //function that handles shuffle
  shuffleImages() {
    let newArr = [];
    for (let i = 0; i < 9; i++) {
      let rando = Math.floor(Math.random() * discography.length);
      let discoRando = discography[rando];
      newArr.push(discoRando);
      discography.splice(rando, 1);
    }
    discography = newArr;
  }

  // function that handles gameover
  gameOver() {
    this.setState({ score: 0 });
    this.setState({ goMessage: "You missed, try again!" });
    this.shuffleImages();
    this.setState({ theClicked: [] });
  }
  render() {
    return (
      <div>
        <p>Score: {this.state.score}</p>
        <h3>{this.state.goMessage}</h3>
        <div className="columns">
          <Image
            alt={discography[0].alt}
            src={discography[0].src}
            scoreUp={this.scoreUp}
            gameOver={this.gameOver}
            theClicked={this.state.theClicked}
          />

          <Image
            alt={discography[1].alt}
            src={discography[1].src}
            scoreUp={this.scoreUp}
            gameOver={this.gameOver}
            theClicked={this.state.theClicked}
          />

          <Image
            alt={discography[2].alt}
            src={discography[2].src}
            scoreUp={this.scoreUp}
            gameOver={this.gameOver}
            theClicked={this.state.theClicked}
          />
        </div>
        <div className="columns">
          <Image
            alt={discography[3].alt}
            src={discography[3].src}
            scoreUp={this.scoreUp}
            gameOver={this.gameOver}
            theClicked={this.state.theClicked}
          />
          <Image
            alt={discography[4].alt}
            src={discography[4].src}
            scoreUp={this.scoreUp}
            gameOver={this.gameOver}
            theClicked={this.state.theClicked}
          />
          <Image
            alt={discography[5].alt}
            src={discography[5].src}
            scoreUp={this.scoreUp}
            gameOver={this.gameOver}
            theClicked={this.state.theClicked}
          />
        </div>
        <div className="columns">
          <Image
            alt={discography[6].alt}
            src={discography[6].src}
            scoreUp={this.scoreUp}
            gameOver={this.gameOver}
            theClicked={this.state.theClicked}
          />
          <Image
            alt={discography[7].alt}
            src={discography[7].src}
            scoreUp={this.scoreUp}
            gameOver={this.gameOver}
            theClicked={this.state.theClicked}
          />
          <Image
            alt={discography[8].alt}
            src={discography[8].src}
            scoreUp={this.scoreUp}
            gameOver={this.gameOver}
            theClicked={this.state.theClicked}
          />
        </div>
      </div>
    );
  }
}
export default Imagebox;
