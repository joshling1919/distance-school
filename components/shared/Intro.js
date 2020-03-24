import React from 'react';

export default ({ children }) => (
  <React.Fragment>
    <div className="intro">{children}</div>
    <hr />
    <style jsx>{`
      .intro {
        margin-bottom: 30px;
        padding: 0 15px;
      }
      hr {
        margin-bottom: 30px;
      }
    `}</style>
  </React.Fragment>
);
