import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';


const { REACT_APP_BASE_URL } = process.env;
// const APIURL = REACT_APP_BASE_URL;
// console.log('APIURL: ', APIURL)



// import './bootstap.min.css';
import { App } from './components';


ReactDOM.render(
  <Router> 
      <App />
  </Router>,
  document.getElementById('app'),
);