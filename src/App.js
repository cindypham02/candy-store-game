import React from 'react';
import CandyContainer from './components/CandyContainer';
import './App.css';

const candyData = [
  { id: 1, name: "Plain Milk", image: "plain3.jpg", calories: 110, ingredients: "cocoa butter, milk, sugar" },
  { id: 2, name: "Plain Dark", image: "plaindark.jpg", calories: 100, ingredients: "cocoa butter, milk, sugar" },
  { id: 3, name: "Plain Hybrid", image: "plaindark2.jpg", calories: 105, ingredients: "cocoa butter, milk, sugar" },
  { id: 4, name: "Nut Butter Cup", image: "nutbutter2.jpg", calories: 130, ingredients: "cocoa butter, milk, sugar" },
  { id: 5, name: "Bailey's Cup", image: "baileys1.jpg", calories: 90, ingredients: "cocoa butter, milk, sugar, Bailey's Cream filling" },
  { id: 6, name: "Rum Barrel", image: "rum.jpg", calories: 110, ingredients: "cocoa butter, milk, sugar, rum, coconut" },
  { id: 7, name: "Orange Fondant", image: "orange.jpg", calories: 125, ingredients: "cocoa butter, milk, sugar, orange cream, orange zest" },
  { id: 8, name: "Cappuccino Cup", image: "coffeecup.jpg", calories: 130, ingredients: "cocoa butter, milk, sugar, coffee-vanilla cream, grated coffee beans" },
  { id: 9, name: "Pistachio Diamond", image: "pistachiocup.jpg", calories: 140, ingredients: "cocoa butter, milk, sugar, nut butter, pistachio" },
  { id: 10, name: "Toffee Crunch", image: "toffeecrunch.jpg", calories: 130, ingredients: "cocoa butter, milk, sugar, toffee, salt, toffee brittle" }
];

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Candy Game!</h1>
      <CandyContainer candies={candyData} />
    </div>
  );
}

export default App;
