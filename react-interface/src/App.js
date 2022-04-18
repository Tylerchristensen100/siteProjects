import logo from './logo.svg';
import './App.css';
import {BiArchive } from 'react-icons/bi';
import Search from './components/Search';
import AddAppointment from './components/AddAppointment';

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl">Appointments</h1>

      <BiArchive className="inline-block text-red-400 text-8xl" />
      <AddAppointment />
      <Search />
    </div>
  );
}

export default App;
