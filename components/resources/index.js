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
        section {
          margin-bottom: 40px;
        }
        h2 {
          margin: 5px 0;
        }
        .resources-container {
          display: flex;
          flex-direction: column;
        }
        @media ${media.tablet} {
          .resources-container {
            flex-direction: row;
            justify-content: space-between;
          }

          .resources {
            width: 45%;
          }
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
          'Zoom is an all in-one video conferencing platform that can be used for video/audio conferencing, screen sharing, collaboration, scheduling, and live chat. Zoom does not require individuals to have a Zoom account to attend meetings, and individuals can easily join meetings through an invitation or URL link. Additionally, Zoom also allows hosts to schedule a meeting in advance, track participant engagement, share control, create breakout rooms, and more.',
      },
      {
        title: 'Microsoft Teams',
        description:
          'Microsoft Teams is a software which allows users to create teams, channels, online meetings, and scheduling. Using Microsoft Teams, individuals can bring together virtual face-to-face meetings, assignments, files and conversations into a single location on either mobile, tablet, PC or browser. Due to its native integration with office applications it provides added benefits and is easy to transition for groups already using Microsoft products. For example, teams allow you to sync meetings with Outlook in advance, which allows individuals to receive and alert through Outlook calendar before a meeting begins.',
      },
    ],
  },
  {
    title: 'Screen Capture Resources',
    resources: [
      {
        title: 'Loom',
        description:
          'Loom is a simple and effective platform which allows users to relay a message through a shareable video. It allows users to communicate ideas quickly and effectively as if you were right next to them. Loom does this by allowing you to screen capture, record, and narrate your video simultaneously, and send it to your audience through an invite or clickable link. Additionally, with tools like pausing, trimming, highlighting, and annotating, it allows users to create a more dynamic and clean video.',
      },
      {
        title: 'Show.me',
        description: 'coming soon',
      },
    ],
  },
];

export default () =>
  sections.map(section => <Section key={section.title} {...section} />);
