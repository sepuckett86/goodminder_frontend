import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'components/auth/requireAuth';

import Goodminders from 'components/Goodminders';
import Add from 'components/Add';
import Print from 'components/Print';

class Home extends Component {
  renderDisplay() {
    switch(this.props.display) {
      case 'add':
        return <Add />;
      case 'goodminders':
        return <Goodminders />;
      case 'print':
        return <Print />;
      default:
        return <Goodminders />;
      }
  }
  render() {
    return (
      <div>
        {this.renderDisplay()}

      </div>
    )
  }
};

function mapStateToProps(state) {
  return { display : state.display.home}
}
export default connect(mapStateToProps, actions)(requireAuth(Home, '/intro'));
