import React, { useState } from 'react';
import Category from './Category';
import { Modal, Button } from 'antd';
import { Zoom, MicrosoftTeams, Loom, Screencastify } from './details';

const sections = [
  {
    category: 'Video Conferencing Tools',
    categoryDescription:
      'Video conferencing tools allow two or more parties to communicate remotely via audio, video, and/or text. This allows for parties to stay connected and up to date when meeting in-person is not possible.',
    items: [
      {
        title: 'Zoom',
        detailKey: 'zoom',
        logo: 'resources/zoom.png',
        description:
          'Zoom is an all in-one video conferencing platform that can be used for video/audio conferencing, screen sharing, collaboration, scheduling, and live chat.',
      },
      {
        title: 'Microsoft Teams',
        detailKey: 'microsoft',
        logo: 'resources/microsoft.png',
        description:
          ' Microsoft Teams is software that allows users to create teams, channels, online meetings, and scheduling.',
      },
    ],
  },
  {
    category: 'Screen Capture Resources',
    categoryDescription:
      'Screen Capture Videos are recordings of an individual’s computer screen for a set duration. This allows the individual to create detailed demonstrations and explanations through a step by step video. Using screen capture videos are a more effective tool for learners who are trying to navigate, or understand a foreign concept compared to static screenshots with explanatory text.',
    items: [
      {
        title: 'Loom',
        detailKey: 'loom',
        logo: 'resources/loom.png',
        description:
          'Loom is a simple and effective platform which allows users to relay a message through a shareable video.',
      },
      {
        title: 'Screencastify',
        detailKey: 'screencastify',
        logo: 'resources/screencastify.jpg',
        description:
          'Screencastify is a chrome extension that allows users to record, annotate and share lessons.',
      },
    ],
  },
];

const detailsMap = {
  zoom: { title: 'Zoom', component: <Zoom /> },
  microsoft: { title: 'Microsoft Teams', component: <MicrosoftTeams /> },
  loom: { title: 'Loom', component: <Loom /> },
  screencastify: { title: 'Screencastify', component: <Screencastify /> },
};

export default () => {
  const [visible, setVisible] = useState(false);
  const [detailKey, setDetailKey] = useState('zoom');

  const openModal = key => {
    setDetailKey(key);
    setVisible(true);
  };

  return (
    <main>
      {sections.map(section => (
        <section>
          <Category key={section.category} {...section} openModal={openModal} />
        </section>
      ))}
      <Modal
        centered={true}
        width="90%"
        visible={visible}
        title={detailsMap[detailKey].title}
        onCancel={() => setVisible(false)}
        footer={[
          <Button key="back" onClick={() => setVisible(false)}>
            Close
          </Button>,
        ]}
      >
        {detailsMap[detailKey].component}
      </Modal>
    </main>
  );
};
