import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Nav from '../../components/nav';

const navItems = [
  {
    text: 'For Teachers',
    href: '/guides/for-teachers',
  },
  { text: 'For Parents', href: '/guides/for-parents' },
];

const Guides = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    // redirect to teacher guide as default guide:
    if (router.pathname === '/guides') {
      router.push('/guides/for-teachers');
    }
  }, []);
  return (
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
};

export default Guides;
