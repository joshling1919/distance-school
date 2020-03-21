import React from 'react';
import Nav from '../../components/nav';

const navItems = [
  {
    text: 'For Teachers',
    href: '/guides/for-teachers',
  },
  { text: 'For Parents', href: '/guides/for-parents' },
];

const Guides = ({ children }) => (
  <div className="guides-container">
    <div className="guides-nav-container">
      <Nav className="guides-nav" navItems={navItems} />
    </div>
    <div className="guides-content">{children}</div>
    <style jsx>{`
      .guides-nav-container {
        margin-top: 20px;
        font-size: 12px;
      }
      .guides-content {
        padding: 20px;
      }
    `}</style>
  </div>
);

export default Guides;
