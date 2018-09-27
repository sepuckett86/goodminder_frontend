import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';


class ResetBegin extends Component {

  render() {
    return (
			<main>
				<div className="box" >
						 <h1>Reset Password</h1>
			        <form  method="post">

			        <div className='alert alert-info'>
							Please enter your email address. You will receive a link to create a new password via email.
							</div>

						<p>Type in your email and when you hit submit, you'll get a link in your email inbox allowing you to reset your password.</p>
			            <table>
                    <tbody>
			            <tr>
			                <td>Email: </td>
			                <td>
												<input className="submissionfield"
												 type="email"
													placeholder="my_email@awesome.com" name="txtemail"
													required />
												</td>
			            </tr>
                </tbody>
			            </table>
			            <br />
			            <button className="button" type="submit" name="btn-submit">Submit</button>
			        </form>
			    </div>

			</main>
    )
  }
};

export default connect(null, actions)(ResetBegin);
