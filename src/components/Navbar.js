import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from 'components/images/logo.png';
import * as actions from 'actions';

class Navbar extends Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <button className="nav-link paragraph-font btn btn-clean" onClick={() => this.props.changeAuth(false)}>Log Out</button>
      )
    } else {
      return (
        <button className="nav-link paragraph-font btn btn-clean" onClick={() => this.props.changeAuth(true)}>Log In</button>
      )
    }
  }
  render() {
    return (
      <header id='header' className="App-header">
              <nav className="navbar navbar-dark navbar-expand-sm justify-content-between">
                <a className="navbar-brand brand-font" id='intro' href="/intro">
                <img src={logo} className="App-logo" alt="logo"/>
                    Goodminder
                    </a>
                <div className="navbar-expand" id="navbarNav">
                  <ul className="navbar-nav ml-auto">
                    <li>
                      {this.renderButton()}
                    </li>
                    <li className="nav-item dropdown">
                      <button className="nav-link paragraph-font btn btn-clean menu dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Menu
                      </button>
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="/"><b>Home</b></a>
                        <a className="dropdown-item" href="/settings">Settings</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/about">About</a>
                        <a className="dropdown-item" href="/examples">Examples</a>
                        <a className="dropdown-item" href="/faq">FAQ</a>
                        <a className="dropdown-item" href="/contact">Contact</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/logout">Log out</a>
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

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(Navbar);
