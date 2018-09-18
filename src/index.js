import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'style/index.css';

import App from 'components/App';

ReactDOM.render(
  <BrowserRouter>
    <Route path='/' component={App} />
  </BrowserRouter>,
  document.querySelector('#root')
);
