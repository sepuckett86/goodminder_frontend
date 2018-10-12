import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';


class Goodminders extends Component {
  checkContent() {
    // Does user have goodminders to display?
    if (this.props.goodminders.length === 0) {
      return(
        <div>
          <h1>Get Started</h1>
          <p>Add your first Goodminder!</p>
          <button type='button' onClick={() => this.props.changeHomeDisplay('add')}>Add</button>
        </div>
      )
    } else {
      return(
        <div>
          <h1>Here are your goodminders</h1>
          <ul className='clean'>
          {this.props.goodminders.map((goodminder, i) => {
            return <li key={i}>{goodminder.mainResponse}</li>
          })}
          </ul>
        </div>
      )
    }

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

function mapStateToProps(state) {
  return { goodminders: state.goodminders};
}

export default connect(mapStateToProps, actions)(Goodminders);
