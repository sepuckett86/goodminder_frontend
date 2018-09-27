import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';


class Goodminders extends Component {
  checkContent() {
    // Does user have goodminders to display?
    return(
      <div>
        <h1>Get Started</h1>
        <p>Add your first Goodminder!</p>
      </div>
    )
  }
  render() {
    return (
      <div>
        <p>Goodminders</p>
        {this.checkContent()}
      </div>
    )
  }
};

export default connect(null, actions)(requireAuth(Goodminders, '/'));
