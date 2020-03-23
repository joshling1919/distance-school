import Header from './header';
import { media } from '../theme';

const Layout = props => (
  <div>
    <div className="layout">
      <Header />
      <div className="content">{props.children}</div>
    </div>
    <style jsx>{`
      .layout {
        margin: 20px 40px;
      }

      .content {
        padding-top: 20px;
      }

      @media ${media.tablet} {
        .layout {
          margin: 30px 50px;
        }
      }
      @media ${media.desktop} {
        .layout {
          margin: 30px 160px;
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
