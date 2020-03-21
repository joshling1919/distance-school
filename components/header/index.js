import React from 'react';
import Nav from '../nav';
import { colors } from '../../theme';

const navItems = [
  { text: 'Resources', href: '/' },
  { text: 'Guides', href: '/guides' },
  { text: 'Questions', href: '/questions' },
];

const Header = () => (
  <div className="header">
    <div className="header-content">
      <h1>
        distance<span className="header-period">.</span>school
      </h1>
      <p>
        Remote learning resources for teachers and parents in the wake of
        COVID-19
      </p>
      <div className="nav-container">
        <Nav navItems={navItems} />
      </div>
    </div>
    <hr />
    <style jsx>{`
      .header {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .nav-container {
        font-size: 16px;
      }

      h1 {
        font-size: 24px;
        font-weight: bold;
        margin: 0;
      }

      p {
        font-size: 12px;
      }

      .header-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
        padding: 20px 30px;
      }

      hr {
        border-top: 1px solid ${colors.highlight};
        width: 100%;
      }

      .header-period {
        color: ${colors.highlight};
      }
    `}</style>
  </div>
);

export default Header;
