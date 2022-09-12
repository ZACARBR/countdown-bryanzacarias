import React, { useState, useEffect }from 'react';
import './App.css';


function App() {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    seconds > 0 ? setTimeout(() => setSeconds(seconds - 1), 1000) : setSeconds(0);
  }, [seconds]);

  return (
    <div className="App">
    <header className="App-header">
        <h1>Count down from 10: {seconds}</h1>
        <pre>The way to get started is to quit talking and begin doing...</pre>
    </header>
  </div>
  );
}

export default App;