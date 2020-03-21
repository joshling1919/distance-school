import React from 'react';
import Nav from '../nav';
import '../scss/Header.scss';

const Header = () => (
  <div className="header">
    <div className="header-content">
      <h1 className="header-content__elem">
        distance<span className="header-period">.</span>school
      </h1>
      <p className="header-content__elem">
        Remote learning resources for teachers and parents in the wake of
        COVID-19
      </p>
      <Nav className="header-content__elem" />
    </div>
    <hr />
  </div>
);

export default Header;
