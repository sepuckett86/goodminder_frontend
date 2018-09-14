import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from 'components/Navbar';
import About from 'components/About';
import Intro from 'components/Intro';

export default () => {
  return(
    <div>
      <Navbar />
      <div className='container jumbotron'>
        Hello, this is App.
        <Route path="/about" component={About} />
        <Route path="/intro" component={Intro} />
      </div>
    </div>
  );
};
