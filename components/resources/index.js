import React from 'react';
import Category from './Category';

const sections = [
  {
    category: 'Video Conferencing Tools',
    items: [
      {
        title: 'Zoom',
        logo:
          'https://d24cgw3uvb9a9h.cloudfront.net/static/93863/image/thumb.png',
        description:
          'Zoom is an all in-one video conferencing platform that can be used for video/audio conferencing, screen sharing, collaboration, scheduling, and live chat.',
      },
      {
        title: 'Microsoft Teams',
        logo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png',
        description:
          ' Microsoft Teams is software that allows users to create teams, channels, online meetings, and scheduling.',
      },
    ],
  },
  {
    category: 'Screen Capture Resources',
    items: [
      {
        title: 'Loom',
        logo:
          'https://www.cosmic.org.uk/sites/default/files/news/Loom%20Logo.png',
        description:
          'Loom is a simple and effective platform which allows users to relay a message through a shareable video.',
      },
      {
        title: 'Screencastify',
        logo:
          'https://yt3.ggpht.com/a/AGF-l79A0kgpTUcfF9NTm7mgx_-ja-xadrb4m6Td6Q=s900-c-k-c0xffffffff-no-rj-mo',
        description:
          'Screencastify is a chrome extension that allows users to record, annotate and share lessons.',
      },
    ],
  },
];

export default () =>
  sections.map(section => (
    <section>
      <Category key={section.category} {...section} />
    </section>
  ));
