import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { LoggedRouters } from './Router/index'

ReactDOM.render(
  <BrowserRouter>
    <LoggedRouters />
  </BrowserRouter>,
  document.getElementById('root')
);