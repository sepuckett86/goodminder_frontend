import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from 'components/Navbar';
import About from 'components/About';
import Intro from 'components/Intro';

export default () => {
  return(
    <div className='App'>
      <Navbar />
      <div>
        <Route path="/about" component={About} />
        <Route path="/intro" component={Intro} />
      </div>
    </div>
  );
};
