import React from 'react';
import '../scss/Nav.scss';

const NavBar = () => (
  <div className="NavBar">
    <a href="/">Guides</a> | <a href="resources">Resources</a> |{' '}
    <a href="questions">Ask a teacher</a>
  </div>
);

export default NavBar;
