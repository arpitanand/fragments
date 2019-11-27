import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

export function ProductInfo({ title, description }) {
  return (
    <div>
      <text className="title">{title}</text>
      <text className="subtitle">{description}</text>
    </div>
  );
}

ProductInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export function ProductPrice({ price, unit }) {
  return (
    <text className="text">{`₹ ${price} / ${unit}`}</text>
  );
}

ProductPrice.propTypes = {
  price: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};
