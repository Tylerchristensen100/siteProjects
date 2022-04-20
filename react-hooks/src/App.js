import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

import Star from './components/Star.js';

function App() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="App">
      <input type="checkbox" value={checked} onChange={() => setChecked(!checked)} />
      <Star checked={checked} />
    </div>
  );
}

export default App;
