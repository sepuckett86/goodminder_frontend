import React from 'react';
import logo from 'images/logo.png';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default() => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/"><img src={logo} alt="logo"/>Goodminder</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="/about">
            About
          </NavItem>
          <NavItem eventKey={2} href="/intro">
            Intro
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavDropdown eventKey={1} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={1.1}>Action</MenuItem>
            <MenuItem eventKey={1.2}>Another action</MenuItem>
            <MenuItem eventKey={1.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={1.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
)
};
