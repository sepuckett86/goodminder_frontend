import React from 'react';
import { Route } from 'react-router-dom';
import 'components/style/App.css';
import ScrollToTop from 'react-router-scroll-top'

import Navbar from 'components/Navbar';
import About from 'components/About';
import Intro from 'components/Intro';
import Examples from 'components/Examples';
import Settings from 'components/Settings';
import LogIn from 'components/LogIn';
import SignUp from 'components/SignUp';
import Home from 'components/Home';

export default () => {
  return(
    <div className='App'>
      <Navbar />
      <div>
        <Route path="/about" component={About} />
        <ScrollToTop>
          <Route path="/intro" component={Intro} />
        </ScrollToTop>
        <Route path="/examples" component={Examples} />
        <Route path="/settings" component={Settings} />
        <Route path="/" exact component={Home} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
      </div>
    </div>
  );
};
