import React, { useState, useReducer } from 'react';
import { fruitImages } from './fruits.js';

const initialState = {
  cart: [],
  total: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newCart = [...state.cart, action.fruit];
      return { ...state, cart: newCart, total: state.total + action.fruit.price };
    case 'REMOVE_FROM_CART':
      const filteredCart = state.cart.filter(fruit => fruit.id !== action.fruit.id);
      return { ...state, cart: filteredCart, total: state.total - action.fruit.price };
    default:
      return state;
  }
};

const FruitCart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [selectedFruit, setSelectedFruit] = useState(null);

  const handleAddToCart = (fruit) => {
    dispatch({ type: 'ADD_TO_CART', fruit });
  };

  const handleRemoveFromCart = (fruit) => {
    dispatch({ type: 'REMOVE_FROM_CART', fruit });
  };

  const handleSelectFruit = (fruit) => {
    setSelectedFruit(fruit);
  };

  return (
    <div>
      <h1>Fruit Cart</h1>
      <ul>
        {fruitImages.map((fruit) => (
          <li key={fruit.id}>
            <img src={fruit.image} alt={fruit.name} />
            <span>{fruit.name}</span>
            <span>${fruit.price}</span>
            <button onClick={() => handleAddToCart(fruit)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <div>
        <h2>Cart</h2>
        <ul>
          {state.cart.map((fruit) => (
            <li key={fruit.id}>
              <img src={fruit.image} alt={fruit.name} />
              <span>{fruit.name}</span>
              <span>${fruit.price}</span>
              <button onClick={() => handleRemoveFromCart(fruit)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total: ${state.total}</p>
      </div>
    </div>
  );
};

export default FruitCart;