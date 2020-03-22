import React, { useState } from 'react';
import Category from './Category';
import { Modal, Button } from 'antd';
import {
  Zoom,
  MicrosoftTeams,
  Loom,
  Screencastify,
  KhanAcademy,
  BrainPop,
  GoogleClassroom,
  ClassDojo,
} from './details';

const sections = [
  {
    category: 'Full Curriculum Coverage',
    categoryDescription:
      'These websites cover a wide variety of content and allows educators across different grade levels and content areas to utilize the site to their benefit.',
    items: [
      {
        title: 'Khan Academy',
        detailKey: 'khan',
        logo: 'resources/khan.jpg',
        description:
          'Khan Academy is a completely free, "one-stop shop" that allows educators to accomplish everything they would normally do in a traditional classroom at home. Khan Academy has a library of standards-aligned lessons covering pre-school, math, science, ELA, test prep content, and is available in 40 different languages.',
      },
      {
        title: 'BrainPOP',
        detailKey: 'brainpop',
        logo: 'resources/brainpop.png',
        description:
          'BrainPOP offers animated resources over a wide variety of topics that support educators and engage students. Generally, thought of as a place with fun instructional videos, BrainPOP goes beyond videos and has readings, quizzes, concept maps, and coding.',
      },
    ],
  },
  {
    category: 'Learning Management Systems',
    categoryDescription:
      'An LMS is used to support learning by providing a space where materials can be stored and organized, assessments can be given, and students and teachers can interact using an internal messaging system. It streamlines the education process, by putting everything in one central location, making it easier to track activity, record data, and engage students and parents.',
    items: [
      {
        title: 'Class Dojo',
        detailKey: 'classDojo',
        logo: 'resources/classdojo.jpeg',
        description:
          'ClassDojo is a school communication platform that helps educators build classroom and community culture by connecting teachers, students, and families.',
      },
      {
        title: 'Google Classroom',
        detailKey: 'googleClassroom',
        logo: 'resources/googleclassroom.png',
        description:
          'Google Classroom is a learning management system that is part of the Google Apps for Education suite. Google Classroom is an online platform that allows teachers to create online classrooms, create assignments, quizzes, and monitor student progress, while keeping students accountable with due dates, grades, and feedback.',
      },
    ],
  },
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
  khan: { title: 'Khan Academy', component: <KhanAcademy /> },
  brainpop: { title: 'BrainPOP', component: <BrainPop /> },
  googleClassroom: {
    title: 'Google Classroom',
    component: <GoogleClassroom />,
  },
  classDojo: { title: 'Class Dojo', component: <ClassDojo /> },
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
