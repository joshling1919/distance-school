import Header from './header';
import { Divider } from 'antd';
import { media } from '../theme';

const Layout = props => (
  <div>
    <div className="layout">
      <Header />
      <div className="content">{props.children}</div>
      <Divider />
    </div>
    <style jsx>{`
      .layout {
        margin: 20px auto;
        max-width: 90%;
      }

      .content {
        padding-top: 20px;
      }

      @media ${media.tablet} {
        .layout {
          margin: 30px auto;
          max-width: 80%;
        }
      }
      @media ${media.desktop} {
        .layout {
          margin: 30px auto;
          max-width: 960px;
        }
      }
    `}</style>
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }

      html,
      body,
      #__next {
        height: 100%;
        width: 100%;
      }

      body {
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `}</style>
  </div>
);

export default Layout;
