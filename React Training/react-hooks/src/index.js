import React, {useState, useEffect, useReducer, useRef} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';



function App() {
  const sound = useRef();
  const color= useRef();

  const submit = (e) => {
    e.preventDefault();
    const soundValue = sound.current.value;
    const colorValue = color.current.value;
    sound.current.value = "";
    color.current.value = "";
    }
    return (
      <>
       <form onSubmit={submit}>
         <input type="text" placeholder="Sound..." ref={sound} />
         <input type="color" ref={color} />
         <button>ADD</button>
       </form>
      </>
    )
}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
