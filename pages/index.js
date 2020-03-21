import React from 'react';
import { colors } from '../theme';

const Index = () => (
  <div>
    <p>
      Over the last week, several groups have graciously compiled large banks of
      resources that educators and parents can turn to, such as{' '}
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
      </a>
      .
    </p>
    <p>
      The vast amount of available resources can be both encouraging and
      intimidating. Our goal here is to simplify things by providing an
      opinionated set of recommendations on where you should turn to to
      facilitate high quality distance learning.
    </p>
    <style jsx>{`
      a {
        text-decoration: underline;
        color: ${colors.linkBlue};
      }
    `}</style>
  </div>
);

export default Index;
