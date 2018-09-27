import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';

import Goodminders from 'components/Goodminders';

class Home extends Component {

  render() {
    return (
      <div>
        <Goodminders />
      </div>
    )
  }
};

export default connect(null, actions)(requireAuth(Home, '/intro'));
