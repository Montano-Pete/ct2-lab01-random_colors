import React from 'react';
import PropTypes from 'prop-types';
import Style from './ColorSquare.css';

const ColorSquare = ({ color }) => {
  return <div className={Style.square} style={{ background: color }}></div>;
};

ColorSquare.propTypes = {
  color: PropTypes.string.isRequired
};

export default ColorSquare;
