import React from 'react';
import './App.css';
import Body from './Components/Home/Body/Body';
import Header from './Components/Home/Header/Header';

function App() {
  return (
    <div className="App">
      <div className="Wrapper">
        <Header></Header>
        <Body></Body>
      </div>
    </div>
  );
}

export default App;
