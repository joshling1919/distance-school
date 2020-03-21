import React from 'react';
import Nav from '../nav';
import { colors } from '../../theme';

const navItems = [
  { text: 'Resources', href: '/' },
  { text: 'Guides', href: '/guides/for-teachers' },
  { text: 'Questions', href: '/questions' },
];

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
      <Nav className="header-content__elem" navItems={navItems} />
    </div>
    <hr />
    <style jsx>{`
      .header {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      h1 {
        font-size: 24px;
        font-weight: bold;
      }

      .header-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
        padding: 30px;
      }
      .header-content__elem {
        margin-bottom: 20px;
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
