import React from 'react';
import AllQuestions from '../components/questions';

const Questions = () => (
  <div>
    <div className="intro">
      <p>Below is a list of frequently asked questions.</p>
    </div>
    <hr />
    <AllQuestions />
    <style jsx>{`
      .intro {
        margin-bottom: 30px;
      }
      hr {
        margin-bottom: 30px;
      }
    `}</style>
  </div>
);

export default Questions;
