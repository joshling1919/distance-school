import React, { useState } from 'react';
import Category from './Category';
import { Modal, Button } from 'antd';
import {
  BrainPop,
  ClassDojo,
  GoogleClassroom,
  Kahoot,
  KhanAcademy,
  Loom,
  MicrosoftTeams,
  Quizlet,
  Screencastify,
  Zoom,
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
          'Khan Academy is a completely free, "one-stop shop" that allows educators to accomplish everything they would normally do in a traditional classroom at home.',
      },
      {
        title: 'BrainPOP',
        detailKey: 'brainpop',
        logo: 'resources/brainpop.png',
        description:
          'BrainPOP offers animated resources over a wide variety of topics that support educators and engage students.',
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
          'Google Classroom is an online platform that allows teachers to create online classrooms, create assignments, quizzes, and monitor student progress, while keeping students accountable with due dates, grades, and feedback.',
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
  {
    category: 'Formative Assessments',
    categoryDescription:
      'Formative assessments are a form of assessment used to check for student progress during and throughout the course of a lesson and unit. These assessments can be used in a multitude of ways to gather pertinent information. Although, there are many ways to assess students formatively it is only effective when teachers intentionally act on the data that they gather from students in order to improve instruction. When formative assessments encompass both the data collected and your interpretation of these data, it allows educators to give students ongoing feedback as students develop mastery of the content and material.',
    items: [
      {
        title: 'Kahoot',
        detailKey: 'kahoot',
        logo: 'resources/kahoot.png',
        description:
          'Kahoot is an in-game learning platform designed for social learning. Creators can generate multiple-choice quizzes, which then can be accessed by the user via a web browser or the Kahoot app.',
      },
      {
        title: 'Quizlet',
        detailKey: 'quizlet',
        logo: 'resources/quizlet.png',
        description:
          'Quizlet allows students and educators to create, study, and engage in any material they are trying to master through the creation of online flash cards.',
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
  quizlet: { title: 'Quizlet', component: <Quizlet /> },
  kahoot: { title: 'Kahoot', component: <Kahoot /> },
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
        <section key={section.category}>
          <Category key={section.category} {...section} openModal={openModal} />
        </section>
      ))}
      <Modal
        className="modal"
        centered={true}
        width="90%"
        style={{ maxWidth: 960 }}
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
