import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { number, object, withKnobs } from '@storybook/addon-knobs';
import OrderItem from './OrderItem';

export const milk = {
  productId: '1',
  title: 'Organic Milk',
  description: 'Fresh full fat organic milk',
  price: 40,
  unit: 'Litre',
  availableUnits: 20,
};

export const butter = {
  productId: '2',
  title: 'Organic Butter',
  description: 'Fresh made organic butter',
  price: 90,
  unit: 'Kg',
  availableUnits: 6,
};

export const actions = {
  increment: action('increment'),
  decrement: action('decrement'),
};

storiesOf('OrderItem', module)
  .addDecorator(withKnobs)
  // eslint-disable-next-line react/jsx-props-no-spreading
  .add('milk', () => <OrderItem product={object('product', { ...milk })} quantity={number('quanity', 2)} {...actions} />)
  // eslint-disable-next-line react/jsx-props-no-spreading
  .add('bread', () => <OrderItem product={object('product', { ...butter })} quantity={number('quanity', 1.5)} {...actions} />);
