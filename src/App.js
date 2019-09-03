import React from 'react';
import './App.css';

function App() {

  

  return (
    <div className="App">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display:none">
        <defs>
          <filter id="squiggly">
            <feTurbulence baseFrequency="0.22" numOctaves="3" result="noise" seed="0" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" />
          </filter>
        </defs>
    </svg>
    </div>
  );
}

export default App;
