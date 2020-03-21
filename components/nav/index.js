import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import '../scss/Nav.scss';

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
          <Link href={href}>
            <a className={className}>{text}</a>
          </Link>
        );
      })}
    </div>
  );
};

NavBar.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, href: PropTypes.string })
  ).isRequired,
};

export default NavBar;
