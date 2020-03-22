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
        Desktop application and Chrome Extension{' '}
        <a
          href="https://help.screencastify.com/article/228-is-screencastify-compatible-with-my-device"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </Descriptions.Item>
      <Descriptions.Item label="Cost">
        <p>
          Free for basic use.{' '}
          <strong>Educators receive 40% off Screencastify Unlimited.</strong>
        </p>
        <p>
          For more info, visit{' '}
          <a
            href="https://www.screencastify.com/buy"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.screencastify.com/buy
          </a>
        </p>
      </Descriptions.Item>
      <Descriptions.Item label="Login in Requirements">
        Account is required.
      </Descriptions.Item>
      <Descriptions.Item label="Capacity">
        <ul>
          <li>
            <strong>Screencastify Basic:</strong> Record up to 5 minutes per
            video
          </li>
          <li>
            <strong>Screencastify Unlimited:</strong> Unlimited recording time
          </li>
        </ul>
      </Descriptions.Item>
      <Descriptions.Item label="Supplemental Resources">
        <ul>
          <li>
            <Anchor
              text="Learn how to navigate Screencast Basics"
              href="https://www.screencastify.com/courses"
            />
          </li>
          <li>
            <Anchor
              text="Screencastify tutorials"
              href="https://www.youtube.com/watch?v=v7uScletiPc"
            />
          </li>
          <li>
            <Anchor
              text="How to make Video Tutorials for Students"
              href="https://www.youtube.com/watch?v=lHr9r-F-k1s"
            />
          </li>
          <li>
            <Anchor
              text="Screencastify to take videos lessons online"
              href="https://www.youtube.com/watch?v=v3Qw5AWvM7o"
            />
          </li>
          <li>
            <Anchor
              text="How to use video to master distance learning"
              href="https://drive.google.com/file/d/1tdeOvAaedIOF-zObE_nEooUy6cS-uTme/view"
            />
          </li>
        </ul>
      </Descriptions.Item>
    </Descriptions>
  </div>
);
