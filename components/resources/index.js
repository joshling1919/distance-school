import React from 'react';
import { media } from '../../theme';

const Section = ({ title, resources }) => {
  return (
    <section>
      <h2>{title}</h2>
      <div className="resources-container">
        {resources.map(({ title, description }) => (
          <div key={title} className="resources">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        h2 {
          margin: 0;
        }
        .resources-container {
          display: flex;
          flex-direction: column;
        }
        @media ${media.tablet} {
          .resources-container {
            flex-direction: row;
          }

          .resources {
            padding: 15px;
          }
        }
        .resources {
          flex: 1;
        }
      `}</style>
    </section>
  );
};

const sections = [
  {
    title: 'Video Conferencing Tools',
    resources: [
      {
        title: 'Zoom',
        description:
          'Zoom is offering a 90 days free for teachers and students. Zoom offers remote video conferencing services to stay connected with your students on any device.',
      },
      {
        title: 'Google Hangouts',
        description: 'Super simple to use!',
      },
    ],
  },
];

export default () =>
  sections.map(section => <Section key={section.title} {...section} />);
