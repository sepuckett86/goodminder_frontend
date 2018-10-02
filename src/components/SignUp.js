import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_again: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <main>
        <div className="box">
        <h1>Create New Account</h1>
				<br/>
				<form id="needs-validation" method="post">

					<div className="form-group row">
				        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email address</label>
						<div className="col-sm-10">
				            <input name="email" onChange={this.handleChange} type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="example@awesome.com" required/>
				            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
				        </div>
				  </div>
				  <div className="form-group row">
				    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
				        <div className="col-sm-10">
				            <input name="password" onChange={this.handleChange} type="password" className="form-control" id="inputPassword" aria-describedby="passwordHelpBlock" placeholder="********" required/>
							<small id="passwordHelpBlock" className="form-text text-muted">
  						Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
							</small>
						</div>
				  </div>
					<div className="form-group row">
				        <label htmlFor="inputPassword2" className="col-sm-2 col-form-label">Re-Type Password</label>
				        <div className="col-sm-10">
				            <input name="password_again" onChange={this.handleChange} type="password" className="form-control" id="inputPassword2" placeholder="********" required/>
				        </div>
				    </div>
				        <button type="submit" className="btn btn-primary" id="btn-signup" name="btn-signup">Submit</button>
				</form>
        </div>

				<div className="box">
        <p>Already have an account?
          <Link to='/login' className='btn btn-goodminder btn-sm'>
            <i className="fas fa-arrow-circle-right"></i>Log In
          </Link>
        </p>
				</div>
      <br/>
      <br/>
    </main>
    )
  }
};

export default connect(null, actions)(SignUp);
