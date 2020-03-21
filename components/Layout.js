import Head from 'next/head';

import Header from './header';
import './scss/Layout.scss';

const Layout = props => (
  <div className="Layout">
    <Head>
      <title>Distance.School</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <Header />
    <div className="Content">{props.children}</div>
  </div>
);

export default Layout;
