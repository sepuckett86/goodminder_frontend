import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';


class UserInfo extends Component {

  render() {
    return (
      <main>
        <div className="box">
        <h1>My Information</h1>
				<br/>
        <p>Enter what will help you have a more personal Goodminder experience</p>
				<form id="needs-validation" method="post">
					<div className="form-group row">
    				    <label htmlFor="inputName" className="col-sm-2 col-form-label">Your Name</label>
					   <div className="col-sm-10">
    				        <input type="text" className="form-control" id="inputName" placeholder="Bob" name="txtuname2" required/>
              </div>
					</div>
					<div className="form-group row">
    				    <label htmlFor="inputUserName" className="col-sm-2 col-form-label">Unique User Name</label>
					   <div className="col-sm-10">
    				        <input type="text" className="form-control" id="inputUserName" placeholder="abc_man5000" name="txtuname" required/>
                        </div>
					</div>
					<div className="form-group row">
				        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email address</label>
						<div className="col-sm-10">
				            <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="example@awesome.com" name="txtemail" required/>
				            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
				        </div>
				  </div>
				  <div className="form-group row">
				    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
				        <div className="col-sm-10">
				            <input type="password" className="form-control" id="inputPassword" aria-describedby="passwordHelpBlock" placeholder="********" name="txtpass" required/>
							<small id="passwordHelpBlock" className="form-text text-muted">
  						Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
							</small>
						</div>
				  </div>
					<div className="form-group row">
				        <label htmlFor="inputPassword2" className="col-sm-2 col-form-label">Re-Type Password</label>
				        <div className="col-sm-10">
				            <input type="password" className="form-control" id="inputPassword2" placeholder="********" name="txtcpass" required/>
				        </div>
				    </div>
				    <div className="form-group row">
				        <div className="col-sm-10">
				            <button type="submit" className="btn btn-primary" id="btn-signup" name="btn-signup">Submit</button>
				        </div>
				    </div>
				</form>
        </div>

				<div className="box">
        <p>Already have an account? <a href="login.php" className='btn btn-goodminder btn-sm'><i className="fas fa-arrow-circle-right"></i>Log In</a></p>
				</div>
      <br/>
      <br/>
    </main>
    )
  }
};

export default connect(null, actions)(UserInfo);
