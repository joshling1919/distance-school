import React from 'react';
import Nav from '../nav';
import '../scss/Header.scss';

const Header = () => (
  <div className="header">
    <div className="header-content">
      <h1>
        distance<span className="header-period">.</span>school
      </h1>
      <p>
        A list of remote learning resources for teachers and parents in the wake
        of COVID-19
      </p>
      <Nav />
    </div>
    <hr />
  </div>
);

export default Header;
