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
  <div>
    <Nav navItems={navItems} />
    <div>{children}</div>
  </div>
);

export default Guides;
