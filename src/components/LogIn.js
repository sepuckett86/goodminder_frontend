import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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
      <div>
        <div className="box" >
        <h1>Log In</h1>

				<form id="needs-validation" noValidate>
				  <div className="form-group row">
				    <label className="col-sm-2 col-form-label" htmlFor="exampleInputEmail1">Email address</label>
						<div className="col-sm-10">
						<input name="email" onChange={this.handleChange} type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" required/>
					</div>
					</div>

				  <div className="form-group row">
				    <label className="col-sm-2 col-form-label" htmlFor="exampleInputPassword1">Password</label>
						<div className="col-sm-10">
						<input name="password" onChange={this.handleChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
				  </div></div>
				  <button type="submit" className="btn btn-primary" name="btn-login">Submit</button>
				</form>
        </div>
				<div className="box">
        <p>First time here?
          <Link to='/signup' className='btn btn-goodminder btn-sm'>
            <i className="fas fa-arrow-circle-right" ></i>Sign Up
          </Link>
        </p>
				<p>Forget your password?
          <Link to='/resetbegin' className='btn btn-goodminder btn-sm'>
            <i className="fas fa-arrow-circle-right"></i>Reset Password
          </Link>
        </p>
				</div>

			</div>
      <br /><br />
	</main>
    )
  }
};

export default LogIn;
