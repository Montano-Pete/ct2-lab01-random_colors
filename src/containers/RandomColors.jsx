import React, { Component } from 'react';
import ColorSquare from '../components/square/ColorSquare';

class RandomColors extends Component {
  state = {
    color: '#FFFF00',
  };

  randomize = () => {
    const arrayOfColors = [
      '#191970',
      '#7FFF00',
      '#DDA0DD',
      '#FFD700',
      '#FFA07A',
      '#FFB6C1',
      '#B22222',
    ];

    const antiDuplicates =
      arrayOfColors[Math.floor(Math.random() * arrayOfColors.length)];

    if(antiDuplicates !== this.state.color) return antiDuplicates;
    else
      return 'url("https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg")';
  };

  colorInterval = () => {
    setInterval(() => {
      this.setState({ color: this.randomize() });
    }, 1000);
  };

  componentDidMount = () => {
    this.colorInterval();
  };

  render() {
    return <ColorSquare color={this.state.color} />;
  }
}

export default RandomColors;
