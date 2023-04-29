// The 4th line imports the ReactDOM library, which is a package that provides methods for rendering React components in a web page.
// The 8th line imports the BrowserRouter component from the react-router-dom library, which is a package for implementing client-side routing in a React application.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

// ReactDOM.render is document.getElementById('root'), which specifies the HTML element where the application should be rendered. 
// In this case, the application will be rendered inside an HTML element with the id attribute of "root".

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);