import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './Components/NavBar';
ReactDOM.render(
  <React.StrictMode>
    <NavBar></NavBar>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


