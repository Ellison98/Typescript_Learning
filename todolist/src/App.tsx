import React from 'react';
import './App.css';
import Todolist from './Todolist';
import Timer from './Timer';
import MyWeather from './MyWeather';

function App() {
  return (
    <div className="container">
      <Todolist></Todolist>
      <Timer></Timer>
      <MyWeather weather='맑음'>일기예보</MyWeather>
    </div>
  );
}

export default App;
