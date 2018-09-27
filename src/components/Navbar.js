import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from 'components/images/logo.png';
import 'components/style/Navbar.css';
import * as actions from 'actions';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  renderNavbar() {
    if (this.props.auth) {
      return (
        <header id='header' className="sticky-top  App-header">
                <nav className="navbar navbar-dark navbar-expand-sm justify-content-between">
                  <Link to="/intro" className="navbar-brand brand-font" id='intro'>
                  <img src={logo} className="App-logo" alt="logo"/>
                  <div className='invisible-when-small'>
                      Goodminder
                    </div>
                  </Link>
                  <div className="navbar-expand" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                      <li>
                        {this.renderButton()}
                      </li>
                      <li className="nav-item dropdown">
                        <button className="nav-link paragraph-font btn btn-clean menu dropdown-toggle" type="button" id="dropdownMenuButton"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            More
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                          <Link to="/" className="dropdown-item">Home</Link>
                          <Link to="/settings" className="dropdown-item">Settings</Link>
                          <div className="dropdown-divider"></div>
                          <Link to="/intro" className="dropdown-item">Welcome</Link>
                          <Link to="/about" className="dropdown-item" >About</Link>
                          <Link to="/examples" className="dropdown-item">Examples</Link>
                          <a className="dropdown-item" href="/faq">FAQ</a>
                          <Link to="/contact" className="dropdown-item">Contact</Link>
                          <div className="dropdown-divider"></div>
                          <Link to="/login" onClick={() => this.props.changeAuth(false)} className="dropdown-item">Switch User</Link>
                          <Link to="/logout" onClick={() => this.props.changeAuth(false)} className="dropdown-item">Log out</Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </nav>
              </header>
      )
    } else {
      return (
        <header id='header' className="sticky-top  App-header">
                <nav className="navbar navbar-dark navbar-expand-sm justify-content-between">
                  <Link to="/intro" className="navbar-brand brand-font" id='intro'>
                  <img src={logo} className="App-logo" alt="logo"/>
                  <div className='invisible-when-small'>
                      Goodminder
                    </div>
                  </Link>
                  <div className="navbar-expand" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                      <li>
                        {this.renderButton()}
                      </li>
                      <li>
                        <Link to="/signup" className="nav-link paragraph-font btn btn-clean logIn">
                          Sign Up
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <button className="nav-link paragraph-font btn btn-clean menu dropdown-toggle" type="button" id="dropdownMenuButton"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            More
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                          <Link to="/" className="dropdown-item">Welcome</Link>
                          <div className="dropdown-divider"></div>
                          <Link to="/about" className="dropdown-item" >About</Link>
                          <Link to="/examples" className="dropdown-item">Examples</Link>
                          <a className="dropdown-item" href="/faq">FAQ</a>
                          <Link to="/contact" className="dropdown-item">Contact</Link>
                          <div className="dropdown-divider"></div>
                          <Link to="/signup" className="dropdown-item">
                            Sign Up
                          </Link>
                        </div>
                      </li>
                      {/*
                        <li className="nav-item points">
                          <button type="button" className="btn btn-goodminder" data-toggle="popover" title="Gminder Points" data-content="Earn points by daily log-in and writing entries. These will come in handy later :) ">
                            {' '}<span className="badge badge-light">40</span>
                          </button>
                        </li>
                        */}
                    </ul>
                  </div>
                </nav>
              </header>
      )
    }
  }
  renderButton() {
    if (this.props.auth) {
      return (
        <button className="nav-link paragraph-font btn btn-clean logIn" onClick={() => this.props.changeAuth(false)}>Log Out</button>
      )
    } else {
      return (
        <button className="nav-link paragraph-font btn btn-clean logIn" onClick={() => this.props.changeAuth(true)}>Log In</button>
      )
    }
  }
  render() {
    return (
      <div>{this.renderNavbar()}</div>
          )
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(Navbar);
