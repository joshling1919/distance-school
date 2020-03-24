import React from 'react';
import { Descriptions } from 'antd';
import Anchor from '../../shared/Anchor';

export default () => (
  <div>
    <p>
      <a
        href="https://www.brainpop.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        BrainPOP
      </a>{' '}
      offers animated resources over a wide variety of topics that support
      educators and engage students. Generally, thought of as a place with fun
      instructional videos, BrainPOP goes beyond videos and has readings,
      quizzes, concept maps, and coding. Additionally, all content is aligned to
      and searchable by state standards including CCSS, NGSS and U.S. state
      standards. The basic setup for a teacher- student interaction would first
      start with the educator searching for a specific subject matter/content,
      followed by assigning an instructional video with follow up activities.
      These follow up activities have built in functionality that allow students
      to submit responses to their teacher and in turn allows the educator to
      track their submissions and provide necessary feedback. Educators can also
      assign summative assessments through BrainPOP’s quizzes in the form
      multiple choice or open-ended questions from BrainPOPS large library of
      questions or create their own.
    </p>

    <Descriptions bordered layout="vertical" size="middle" column={1}>
      <Descriptions.Item label="Supported Platforms">
        Mobile, Desktop, and Tablet
      </Descriptions.Item>
      <Descriptions.Item label="Cost">
        BrainPOP is providing{' '}
        <Anchor text="free access" href="https://go.brainpop.com/COVID19" /> to
        all families and schools during this time.
      </Descriptions.Item>
      <Descriptions.Item label="Login in Requirements">
        Login required to access
      </Descriptions.Item>
      <Descriptions.Item label="Classroom Capabilities">
        <ul>
          <li>Instructional videos</li>
          <li>
            Mimic Blooms Taxonomy by explaining information through discover,
            applying knowledge through play, and showing what you’ve learned
            through create features.
          </li>
          <li>Differentiation</li>
          <li>Create whole class or individual assignments </li>
          <li>Track student progress</li>
          <li>Distance learning lesson plans</li>
          <li>
            LMS integration to G Suite, Google Classroom, Clever, Canvas,
            Moodle, Schoology, ClassLink, ONEROSTER, CSV, and etc
          </li>
        </ul>
      </Descriptions.Item>
      <Descriptions.Item label="Subjects Covered">
        STEM • Social Studies • English • Health • Arts & Music
      </Descriptions.Item>
      <Descriptions.Item label="Supplemental Resources">
        <ul>
          <li>
            <Anchor
              text="BrainPOP Overview"
              href="https://www.youtube.com/watch?v=ggGJUhogoTg"
            />
          </li>
          <li>
            <Anchor
              text="BrainPOP- Setting Up classes"
              href="https://www.youtube.com/watch?v=5zTKvpweibs"
            />
          </li>
          <li>
            <Anchor
              text="Distance Learning with BrainPOP"
              href="https://www.youtube.com/watch?v=mZNNwo0jhEQ"
            />
          </li>
          <li>
            <Anchor
              text="BrainPOP Distance Learning Lesson Resources"
              href="https://educators.brainpop.com/school-home-connection-resources/"
            />
          </li>
          <li>
            <Anchor
              text="BrainPOP Tools for Teachers"
              href="https://www.youtube.com/watch?v=KEfHL4Xhv8M"
            />
          </li>
          <li>
            <Anchor
              text="Learn more about Create, Play, and Discover"
              href="https://www.youtube.com/watch?v=W8ed5yjO5f0"
            />
          </li>
        </ul>
      </Descriptions.Item>
    </Descriptions>
  </div>
);
