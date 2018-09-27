import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class LogOutCheck extends Component {
  checkAuth() {
    if (!this.props.auth) {
      return (
        <div>
          <p>You have been successfully logged out.</p>
        </div>
      )
    } else {
      return (
        <div>
          <p>You are successfully logged in.</p>
        </div>
      )
    }
  }
  render() {
    return (
      <div className='box'>{this.checkAuth()}</div>

    )
  }
};

function mapStateToProps(state) {
  return { auth: state.auth };
}
export default connect(mapStateToProps, actions)(LogOutCheck);
