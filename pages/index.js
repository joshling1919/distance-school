import React from 'react';
import Resources from '../components/resources';

const Index = () => (
  <div>
    <div className="intro">
      <p>
        Over the last week, several groups, such as{' '}
        <a
          href="https://www.techforlearners.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tech for Learners
        </a>
        ,{' '}
        <a
          href="https://www.albert.io/blog/tools-for-distance-learning/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Albert
        </a>
        , and{' '}
        <a
          href="https://digitalpromise.org/online-learning/online-learning-resources/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Digital Promise
        </a>{' '}
        have graciously compiled large banks of resources that educators and
        parents can turn to.
      </p>
      <p>
        The vast amount of available resources can be both encouraging and
        intimidating. Our goal here is to simplify things by providing
        recommendations on what we think are the best tools to start with.
      </p>
    </div>
    <hr />
    <Resources />

    <style jsx>{`
      .intro {
        margin-bottom: 30px;
      }
      hr {
        margin-bottom: 30px;
      }

      h1 {
        margin: 20px 0;
      }

      section {
        margin-bottom: 40px;
      }
    `}</style>
  </div>
);

export default Index;
