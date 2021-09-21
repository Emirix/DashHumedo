import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios  from "axios";
axios.defaults.baseURL = "http://116.203.43.100"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

