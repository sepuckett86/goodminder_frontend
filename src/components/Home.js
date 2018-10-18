import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';

import Goodminders from 'components/Goodminders';
import Add from 'components/Add';

class Home extends Component {
  renderDisplay() {
    switch(this.props.display) {
      case 'add':
        return <Add />;
      case 'goodminders':
        return <Goodminders />;
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
