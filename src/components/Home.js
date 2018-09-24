import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';

class Home extends Component {

  render() {
    return (
      <div>
        Home
      </div>
    )
  }
};

export default connect(null, actions)(requireAuth(Home, '/intro'));
