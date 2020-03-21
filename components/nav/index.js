import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { colors } from '../../theme';

const NavBar = ({ navItems }) => {
  const router = useRouter();
  return (
    <div className="nav-bar">
      {navItems.map(({ text, href }) => {
        let className = router.pathname.includes(href) ? 'active' : '';
        if (href === '/') {
          className = router.pathname === '/' ? 'active' : '';
        }
        return (
          <Link href={href} key={href}>
            <a className={className}>{text}</a>
          </Link>
        );
      })}
      <style jsx>{`
        .nav-bar {
          font-size: inherit;
          display: flex;
          justify-content: center;
        }
        a {
          display: inline-block;
          text-decoration: none;
          color: ${colors.onPrimary};
        }
        a::after {
          content: '|';
          margin: 10px;
          color: black;
          font-weight: normal;
        }
        a:last-child::after {
          display: none;
        }

        .active {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

NavBar.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, href: PropTypes.string })
  ).isRequired,
};

export default NavBar;
