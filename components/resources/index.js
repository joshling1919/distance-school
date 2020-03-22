import React from 'react';
import Section from '../shared/Section';

const sections = [
  {
    title: 'Video Conferencing Tools',
    items: [
      {
        Title: () => 'Zoom',
        Description: () =>
          'Zoom is an all in-one video conferencing platform that can be used for video/audio conferencing, screen sharing, collaboration, scheduling, and live chat. Zoom does not require individuals to have a Zoom account to attend meetings, and individuals can easily join meetings through an invitation or URL link. Additionally, Zoom also allows hosts to schedule a meeting in advance, track participant engagement, share control, create breakout rooms, and more.',
      },
      {
        Title: () => 'Microsoft Teams',
        Description: () => (
          <span>
            Check out this list of free & low-cost internet providers through
            the National Digital Inclusion Alliance.
          </span>
        ),
      },
    ],
  },
  {
    title: 'Screen Capture Resources',
    items: [
      {
        Title: () => 'Loom',
        Description: () =>
          'Loom is a simple and effective platform which allows users to relay a message through a shareable video. It allows users to communicate ideas quickly and effectively as if you were right next to them. Loom does this by allowing you to screen capture, record, and narrate your video simultaneously, and send it to your audience through an invite or clickable link. Additionally, with tools like pausing, trimming, highlighting, and annotating, it allows users to create a more dynamic and clean video.',
      },
      {
        Title: () => 'Screencastify',
        Description: () =>
          'Screencastify is a chrome extension that allows users to record, annotate and share lessons from their browser. Similar to Loom, it allows users to communicate ideas quickly and effectively as if you were right next to them. During recording, Screencastify positions a toolbox in the lower left-hand corner to allow users to toggle between different functions such as adding click animations, pausing, creating focus bubbles, and pulling up a stop watch. And after your recording, you have the capabilities to crop, trim or merge any parts of your recorded video. At the end, Screencastify automatically uploads your file into Google drive or Youtube account, and create a clickable link your audience can use.',
      },
    ],
  },
];

export default () =>
  sections.map(section => <Section key={section.title} {...section} />);
