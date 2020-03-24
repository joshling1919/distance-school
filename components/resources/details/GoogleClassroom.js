import React from 'react';
import { Descriptions } from 'antd';
import Anchor from '../../shared/Anchor';

export default () => (
  <div>
    <p>
      <a
        href="https://classroom.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Google Classroom
      </a>{' '}
      is a learning management system that is part of the Google Apps for
      Education suite. Google Classroom is an online platform that allows
      teachers to create online classrooms, create assignments, quizzes, and
      monitor student progress, while keeping students accountable with due
      dates, grades, and feedback. Through the Google Classroom built in
      communication system, learners, parents and teachers can also connect over
      assignments and student performance. Additionally, teachers can utilize
      different features in conjunction with the classroom such as the Forms and
      Gmail tool to make the class more dynamic.
    </p>

    <Descriptions bordered layout="vertical" size="middle" column={1}>
      <Descriptions.Item label="Supported Platforms">
        Mobile, Desktop, Tablet collaboration and universal browser
        compatibility
      </Descriptions.Item>
      <Descriptions.Item label="Cost">Free for all users</Descriptions.Item>
      <Descriptions.Item label="Login in Requirements">
        <ul>
          <li>Login Required.</li>
          <li>Students can join a classroom through a link.</li>
        </ul>
      </Descriptions.Item>
      <Descriptions.Item label="Capabilities">
        <ul>
          <li>
            Well established in Google Ecosystem (GoogleDrive, Gmail, Forms,
            Sheets, Docs, etc)
          </li>
          <li>Create online classes</li> <li>Create online assignments</li>
          <li>Track student progress and performance</li> <li>Easy Access</li>
          <li>In house communication system</li> <li>Automatic Translation</li>
        </ul>
      </Descriptions.Item>
      <Descriptions.Item label="Supplemental Resources">
        <ul>
          <li>
            <Anchor
              text="Google Classroom 101"
              href="https://www.youtube.com/watch?v=DeOVe2YV2Io"
            />
          </li>
          <li>
            <Anchor
              text="Getting Started with Google classroom"
              href="https://www.youtube.com/watch?v=BnmIqG7oBBU"
            />
          </li>
          <li>
            <Anchor
              text="Online Course with Google Classroom"
              href="https://www.youtube.com/watch?v=e3YhXdmSpso"
            />
          </li>
          <li>
            <Anchor
              text="Google Classroom Tutorials for Students and Parents"
              href="https://www.youtube.com/watch?v=xfgqtCi7hdo"
            />
          </li>
          <li>
            <Anchor
              text="Google Classroom Best Practices"
              href="https://www.youtube.com/watch?v=eU2_5qKhpFE"
            />
          </li>
        </ul>
      </Descriptions.Item>
    </Descriptions>
  </div>
);
