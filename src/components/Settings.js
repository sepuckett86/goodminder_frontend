import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';

class Settings extends Component {

  render() {
    return (
      <div>
        Settings
      </div>
    )
  }
};


export default connect(null, actions)(requireAuth(Settings, '/login'));
