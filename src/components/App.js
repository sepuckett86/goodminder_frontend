import React from 'react';
import { Route } from 'react-router-dom';
import 'components/style/App.css';

import Navbar from 'components/Navbar';
import About from 'components/About';
import Intro from 'components/Intro';
import Examples from 'components/Examples';
import Settings from 'components/Settings';
import LogIn from 'components/LogIn';
import SignUp from 'components/SignUp';
import LogOutCheck from 'components/LogOutCheck';
import Reset from 'components/Reset';
import ResetBegin from 'components/ResetBegin';
import Home from 'components/Home';


export default () => {
  return(
    <div className='App'>
      <Navbar />
      <div>
        <Route path="/about" component={About} />
        <Route path="/intro" component={Intro} />
        <Route path="/examples" component={Examples} />
        <Route path="/settings" component={Settings} />
        <Route path="/" exact component={Home} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/reset" component={Reset} />
        <Route path="/resetbegin" component={ResetBegin} />
        <Route path="/logout" component={LogOutCheck} />
      </div>
    </div>
  );
};
