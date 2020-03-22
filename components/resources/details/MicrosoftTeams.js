import React from 'react';

import { Descriptions } from 'antd';

export default () => (
  <div>
    <p>
      Ideal for schools that support Office 365,{' '}
      <a
        href="https://products.office.com/en-us/microsoft-teams/group-chat-software"
        target="_blank"
        rel="noopener noreferrer"
      >
        Microsoft Teams
      </a>{' '}
      is a software which allows users to create teams, channels, online
      meetings, and scheduling. Using Microsoft Teams, individuals can bring
      together virtual face-to-face meetings, assignments, files and
      conversations into a single location on either mobile, tablet, PC or
      browser. Due to its native integration with office applications it
      provides added benefits and is easy to transition for groups already using
      Microsoft products. For example, teams allow you to sync meetings with
      Outlook in advance, which allows individuals to receive and alert through
      Outlook calendar before a meeting begins.
    </p>

    <Descriptions bordered layout="vertical" size="middle" column={1}>
      <Descriptions.Item label="Platforms supported">
        Mobile, Desktop, and Tablet. More details can be found{' '}
        <a
          href="https://docs.microsoft.com/en-us/microsoftteams/hardware-requirements-for-the-teams-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </Descriptions.Item>
      <Descriptions.Item label="Cost">
        <p>
          Microsoft is offering anyone its premium version of Teams for free for
          six months and has lifted existing user limits on its free version.
        </p>
        <p>
          For more info, visit{' '}
          <a
            href="https://products.office.com/en-us/microsoft-teams/compare-microsoft-teams-options"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </p>
      </Descriptions.Item>
      <Descriptions.Item label="Login in Requirements">
        Login Required, The Microsoft Teams is both a standalone application and
        available in with the purchase of Office 365 ProPlus.
      </Descriptions.Item>
      <Descriptions.Item label="Capacity">
        Basic Version: Up to 250 individuals and 8 Hour duration for “Meet Now”
      </Descriptions.Item>
      <Descriptions.Item label="Supplementary Resources">
        <ul>
          <li>
            <a
              href="https://www.youtube.com/watch?v=CH2seLS5Wb0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Teams Tutorial and Overview
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=cN5ypuZF1bI"
              target="_blank"
              rel="noopener noreferrer"
            >
              Teams to Teach an Online Lesson
            </a>
          </li>

          <li>
            <a
              href="https://www.youtube.com/watch?v=hxhxPUf3gjM"
              target="_blank"
              rel="noopener noreferrer"
            >
              Teams Overview for Attendees/Students
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=NcbQ2UK69Tc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo: Teams in the Classroom at Microsoft
            </a>
          </li>
        </ul>
      </Descriptions.Item>
    </Descriptions>
  </div>
);
