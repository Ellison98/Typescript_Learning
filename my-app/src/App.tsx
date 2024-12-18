import React from 'react';
import './App.css';
//import FunctionalComponent from './pages/FunctionalCompoent';
import SelectItem from './pages/SelectItem';

const App:React.FC = () => {
  return (
    <div className="App">
      <SelectItem></SelectItem>
    </div>
  );
}

export default App;