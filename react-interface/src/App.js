import logo from './logo.svg';
import './App.css';
import {BiCalendar,BiTrash } from 'react-icons/bi';
import Search from './components/Search';
import AddAppointment from './components/AddAppointment';
import AppointmentInfo from './components/AppointmentInfo';

import {useState, useEffect, useCallback } from 'react';

function App() {
let {appointmentList, setAppointmentList} = useState([]);
const fetchData = useCallback(() => {
  fetch('./data.json').then(response => response.json()).then(data => {setAppointmentList(data)});
});

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl"><BiCalendar className="inline-block text-red-400 text-8xl" />Appointments</h1>
      <AddAppointment />
      <Search />

      <ul className="divide-y divide-gray-200">
        {appointmentList
          .map(appointment => (
            <AppointmentInfo key={appointment.id} appointment={appointment} />
          ))
        }
      </ul>


</div>
  );
}

export default App;
