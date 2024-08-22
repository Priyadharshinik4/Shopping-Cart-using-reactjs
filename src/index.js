import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import FruitCart from './components/cart.js'

function Main(){
  return (
    <div>
      <FruitCart />
    </div>
  )
}

ReactDOM.render(<Main />,document.getElementById('root'));