import React from 'react';
import { Descriptions } from 'antd';
import Anchor from '../../shared/Anchor';

export default () => (
  <div>
    <p>
      <a
        href="https://www.khanacademy.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Khan Academy
      </a>{' '}
      has a library of standards-aligned lessons covering pre-school, math,
      science, ELA, test prep content, and is available in 40 different
      languages. Khan Academy offers personalized learning through scaffolded
      instructional videos and practice exercises with clear deadlines. These
      videos and practice exercises can be used to create full blown lessons or
      used as a supplement for already created lessons. Additionally, from these
      practice exercises educators are free to give instant feedback and receive
      real time data on how students are doing.
    </p>
    <p>
      <strong>
        Essentially, Khan Academy is a one stop shop that allows educators to
        accomplish everything they would normally do in a traditional classroom
        at home.
      </strong>
    </p>

    <Descriptions bordered layout="vertical" size="middle" column={1}>
      <Descriptions.Item label="Supported Platforms">
        Mobile, Desktop, and Tablet
      </Descriptions.Item>
      <Descriptions.Item label="Cost">free</Descriptions.Item>
      <Descriptions.Item label="Login in Requirements">
        <ul>
          <li>No Login Required to access</li>
          <li>Login required to track student data</li>
        </ul>
      </Descriptions.Item>
      <Descriptions.Item label="Classroom Capabilities">
        <ul>
          <li>Create individual classrooms</li>
          <li>Enroll students</li>
          <li>Set up assignments with due dates</li>
          <li>Differentiate based on learning level</li>
          <li>Review progress across classrooms</li>
          <li>Assign mastery goal before moving on to a new skill</li>
        </ul>
      </Descriptions.Item>
      <Descriptions.Item label="Subjects Covered">
        Math, Science & Engineering, ELA, Computing, Kids, Art & Humanities,
        Test Prep, College Career, Personal Finance
      </Descriptions.Item>
      <Descriptions.Item label="Supplemental Resources">
        <ul>
          <li>
            <Anchor
              text="In-depth quick start guide for parents"
              href="https://khanacademy.zendesk.com/hc/en-us/articles/360040168512-Parent-Quick-Start-Guide"
            />
          </li>
          <li>
            <Anchor
              text="Khan Academy Introduction for Distance Learning"
              href="https://www.youtube.com/watch?v=MH9bhVxvQiU"
            />
          </li>
          <li>
            <Anchor
              text="Khan Academy for Remote Learning"
              href="https://www.youtube.com/watch?v=9xg0picYJ3o"
            />
          </li>
          <li>
            <Anchor
              text="How to set up Classroom"
              href="https://www.youtube.com/watch?v=SO5GllcC0K8"
            />
          </li>
          <li>
            <Anchor
              text="How to use Assignments"
              href="https://www.youtube.com/watch?v=3_JxulDViDw"
            />
          </li>
        </ul>
      </Descriptions.Item>
    </Descriptions>
  </div>
);
