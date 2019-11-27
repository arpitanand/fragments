import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

export default function QuantityCounter({
  min, max, quantity, decrement, increment,
}) {
  return (
    <div className="counter">
      <button type="button" disabled={min === quantity} onClick={decrement}>-</button>
      <text className="text">{quantity}</text>
      <button type="button" disabled={max === quantity} onClick={increment}>+</button>
    </div>
  );
}

QuantityCounter.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number.isRequired,
  quantity: PropTypes.number,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
};

QuantityCounter.defaultProps = {
  min: 0,
  quantity: 0,
};
