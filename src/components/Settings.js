import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';

class Settings extends Component {

  render() {
    return (
      <div className='log-box'>
        <h1>My Information</h1>
        <p>Enter what will help you have a more personal Goodminder experience</p>
        <p>Name</p>
        <p>User name</p>
        <p>Email</p>
        <p>Change password button</p>
      </div>
    )
  }
};

export default connect(null, actions)(requireAuth(Settings, '/login'));
