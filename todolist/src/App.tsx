import React from 'react';
import './App.css';

function App() {
  let name = "React";
  return (
    <div className="container">
      <h1 className = "test">Hello,
        {
          name === "React" ? (<h1>Yes</h1>) : null
        }!!
      </h1>
    </div>
  );
}

export default App;
