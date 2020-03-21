import Head from 'next/head';

import Header from './header';
import './scss/Layout.scss';

const Layout = props => (
  <div className="layout">
    <Head>
      <title>distance.school</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <Header />
    <div className="content">{props.children}</div>
  </div>
);

export default Layout;
