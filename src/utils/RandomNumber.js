import React from 'react';
import PropTypes from 'prop-types';

const random = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const result = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
};

const RandomNumber = ({min, max}) => {
return random(min, max)
};

RandomNumber.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};

export default RandomNumber;