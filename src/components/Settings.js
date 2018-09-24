import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class Settings extends Component {

  // Our component just got rendered
  componentDidMount() {
    this.shouldNavigateAway();
  }

  // Our component just got updated
  componentDidUpdate() {
    this.shouldNavigateAway();
  }

  shouldNavigateAway() {
    if (!this.props.auth) {
      this.props.history.push('/intro');
    }
  }

  render() {
    return (
      <div>
        Settings
      </div>
    )
  }
};

function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps, actions)(Settings);
