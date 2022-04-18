import logo from './logo.svg';
import './App.css';
import {BiArchive } from 'react-icons/bi';

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl">Appointments</h1>

      <BiArchive className="inline-block text-red-400 text-8xl" />
    </div>
  );
}

export default App;
