import React from 'react';
import './App.css';
import Todolist from './Todolist';
import Timer from './Timer';

function App() {
  return (
    <div className="container">
      <Todolist></Todolist>
      <Timer></Timer>
    </div>
  );
}

export default App;
