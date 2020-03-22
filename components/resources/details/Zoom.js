import React from 'react';

import { Descriptions } from 'antd';

export default () => (
  <div>
    <p>
      Zoom is an all in-one video conferencing platform that can be used for
      video/audio conferencing, screen sharing, collaboration, scheduling, and
      live chat. Zoom does not require individuals to have a Zoom account to
      attend meetings, and individuals can easily join meetings through an
      invitation or URL link. Additionally, Zoom also allows hosts to schedule a
      meeting in advance, track participant engagement, share control, create
      breakout rooms, and more.
    </p>

    <Descriptions bordered layout="vertical" size="middle" column={1}>
      <Descriptions.Item label="System Requirements">
        Mobile, Desktop, and Tablet collaboration. More details can be found{' '}
        <a
          href="https://support.zoom.us/hc/en-us/articles/201362023-System-Requirements-for-PC-Mac-and-Linux"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </Descriptions.Item>
      <Descriptions.Item label="Cost">
        <p>
          Zoom has removed its 40-minute meeting limit restriction on its free
          basic accounts for students and teachers at K-12 schools in America.
        </p>
        <p>
          For more info, visit{' '}
          <a
            href="https://zoom.us/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://zoom.us/pricing
          </a>
        </p>
      </Descriptions.Item>
      <Descriptions.Item label="Login in Requirements">
        Account is required to host a meeting, but not required to attend a Zoom
        meeting.
      </Descriptions.Item>
      <Descriptions.Item label="Capacity">
        <ul>
          <li>
            <strong>Basic Version:</strong> Up to 100 people on a call and
            meeting duration up to 40-minutes. (Note: Zoom has removed its
            40-minute meeting limit restriction on its free basic accounts for
            students and teachers at K-12 schools in America.)
          </li>
          <li>
            <strong>Pro Version:</strong> Up to 1000 people on a call and
            meeting duration up to 24 hours
          </li>
        </ul>
      </Descriptions.Item>
      <Descriptions.Item label="Supplementary Resources">
        <ul>
          <li>
            <a
              href="https://www.youtube.com/watch?v=bTSJ0YDoF7o"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zoom Tutorial and Overview
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=UTXUmoNsgg0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zoom to Teach an Online Lesson
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=5iap0Ffl5Lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zoom Overview for Attendees/Students
            </a>
          </li>
        </ul>
      </Descriptions.Item>
    </Descriptions>
  </div>
);
