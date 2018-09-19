import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from 'components/Navbar';
import About from 'components/About';
import Intro from 'components/Intro';
import Home from 'components/Home';

export default () => {
  return(
    <div className='App'>
      <Navbar />
      <div>
        <Route path="/about" component={About} />
        <Route path="/intro" component={Intro} />
        <Route path="/" exact component={Home} />
      </div>
    </div>
  );
};
