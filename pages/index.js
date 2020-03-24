import React from 'react';
import Resources from '../components/resources';
import Intro from '../components/shared/Intro';

const Index = () => (
  <div>
    <Intro>
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
        intimidating. Our goal here is to simplify things by sharing what we
        think are the best tools to start with.
      </p>
    </Intro>
    <Resources />

    <style jsx>{`
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
