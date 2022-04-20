import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


function App(props) {
  const [status, setStatus] = useState("Not Delivered");
  return (
    <div className="App">
      <h1>The Package is {status}</h1>
      <button onClick={() => setStatus("Delivered")}>Deliver</button>
    </div>
  );
}

export default App;
