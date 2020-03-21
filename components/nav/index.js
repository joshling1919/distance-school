import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import '../scss/Nav.scss';

const NavBar = () => {
  const router = useRouter();
  return (
    <div className="nav-bar">
      <Link href="/">
        <a className={router.pathname == '/' ? 'active' : ''}>Guides</a>
      </Link>
      <Link href="resources">
        <a className={router.pathname == '/resources' ? 'active' : ''}>
          Resources
        </a>
      </Link>
      <Link href="questions">
        <a className={router.pathname == '/questions' ? 'active' : ''}>
          Ask a teacher
        </a>
      </Link>
    </div>
  );
};

export default NavBar;
