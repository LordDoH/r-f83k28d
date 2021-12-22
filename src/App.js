import React, {useState } from 'react';
import './App.css';

function App () {
  const [count,setCounter] = useState(0);

  const onClick = () => {setCounter(count+1)}

    return (
      <div>
        <span className="value">{count}</span>
        <button id="inc" onClick = {onClick} >Incrementa</button>
      </div>
    );
}

export default App;
