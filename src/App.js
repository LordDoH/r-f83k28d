import React, {useState } from 'react';
import './App.css';

function App () {
  const [count,setCounter] = useState(0);
    return (
      <div>
        <span className="value">{count}</span>
        <button id="inc" onClick = {() => setCounter(count+1) } >Incrementa</button>
      </div>
    );
}

export default App;
