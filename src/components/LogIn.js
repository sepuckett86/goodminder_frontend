import React, { Component } from 'react';
class LogIn extends Component {

  render() {
    return (
      <main>
      <div>
        <div className="box" >
        <h1>Log In</h1>

				<form id="needs-validation" novalidate>
				  <div className="form-group row">
				    <label className="col-sm-2 col-form-label" for="exampleInputEmail1">Email address</label>
						<div className="col-sm-10">
						<input type="email" className="form-control" id="exampleInputEmail1" name="txtemail" placeholder="Enter email" required/>
					</div>
					</div>

				  <div className="form-group row">
				    <label className="col-sm-2 col-form-label" for="exampleInputPassword1">Password</label>
						<div className="col-sm-10">
						<input type="password" className="form-control" id="exampleInputPassword1" name="txtupass" placeholder="Password" required/>
				  </div></div>
				  <button type="submit" className="btn btn-primary" name="btn-login">Submit</button>
				</form>
        </div>
				<div className="box">
        <p>First time here? <a href="newUser.php" className='btn btn-goodminder btn-sm'><i className="fas fa-arrow-circle-right" ></i>Sign Up</a></p>
				<p>Forget your password? <a href="resetPassword.php" className='btn btn-goodminder btn-sm'><i className="fas fa-arrow-circle-right"></i>Reset Password</a></p>
				</div>

			</div>
      <br /><br />
	</main>
    )
  }
};

export default LogIn;
