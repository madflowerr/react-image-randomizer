import React from "react";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let unclicked = true;
    for (let i = 0; i < this.props.theClicked.length; i++) {
      if (this.props.theClicked[i] === this.props.src) {
        unclicked = false;
      }
    }
    if (unclicked) {
      console.log(this.state.clicked);
      this.props.theClicked.push(this.props.src);
      this.props.scoreUp();
    } else {
      this.props.gameOver();
    }
  }
  render() {
    return (
      <div className="column">
        <div className="box">
          <img
            alt={this.props.alt}
            src={this.props.src}
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default Image;
