import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'components/style/App.css';

import Navbar from 'components/Navbar';
import About from 'components/About';
import Intro from 'components/Intro';
import Examples from 'components/Examples';
import Settings from 'components/Settings';
import LogIn from 'components/auth/LogIn';
import SignUp from 'components/auth/SignUp';
import LogOutCheck from 'components/auth/LogOutCheck';
import Contact from 'components/Contact';
import Faq from 'components/Faq';
import Legal from 'components/Legal';
import Reset from 'components/auth/Reset';
import ResetBegin from 'components/auth/ResetBegin';
import Home from 'components/Home';

class App extends Component {
  render() {
    return(
      <div className='App'>
        <Navbar />
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/intro" component={Intro} />
          <Route path="/examples" component={Examples} />
          <Route path="/settings" component={Settings} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/reset" component={Reset} />
          <Route path="/resetbegin" component={ResetBegin} />
          <Route path="/logout" component={LogOutCheck} />
          <Route path="/contact" component={Contact} />
          <Route path="/legal" component={Legal} />
          <Route path="/faq" component={Faq} />
        </div>
      </div>
    );
  }
}
export default App;
