import React from 'react';
import PropTypes from 'prop-types';

import { ProductInfo, ProductPrice } from './Product';
import QuantityCounter from './Quantity';

export default function OrderItem({
  product: {
    productId, title, description, price, unit, availableUnits,
  },
  quantity,
  increment,
  decrement,
}) {
  return (
    <div className="order-item">
      <ProductInfo title={title} description={description} />
      <ProductPrice price={price} unit={unit} />
      <QuantityCounter
        min={1}
        max={availableUnits}
        quantity={quantity}
        increment={() => increment(productId)}
        decrement={() => decrement(productId)}
      />
    </div>
  );
}

OrderItem.propTypes = {
  product: PropTypes.shape({
    productId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    availableUnits: PropTypes.number.isRequired,
  }).isRequired,
  quantity: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};
