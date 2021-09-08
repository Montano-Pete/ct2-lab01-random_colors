import React, { Component } from 'react';
import ColorSquare from '../components/square/ColorSquare';

class RandomColors extends Component {
  state = {
    color: '#FFFF00'
  }

  randomize = () => {
    const arrayOfColors = [
      '#191970',
      '#7FFF00',
      '#DDA0DD',
      '#FFD700',
      '#FFA07A',
      '#FFB6C1',
      '#B22222'
    ];

    return arrayOfColors[Math.floor(Math.random() * arrayOfColors.length)];
  }

  colorInterval = () => {
    setInterval(() => {
      this.setState({ color: this.randomize() });
    }, 1000);
  }

  componentDidMount = () => {
    this.colorInterval();
  }

  render() {
    return <ColorSquare color={this.state.color} />;
  }
}

export default RandomColors;
