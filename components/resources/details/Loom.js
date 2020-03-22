import React from 'react';

import { Descriptions } from 'antd';

export default () => (
  <div>
    <p>
      <a href="https://www.loom.com/" target="_blank" rel="noopener noreferrer">
        Loom
      </a>{' '}
      is a simple and effective platform which allows users to relay a message
      through a shareable video. It allows users to communicate ideas quickly
      and effectively as if you were right next to them. Loom does this by
      allowing you to screen capture, record, and narrate your video
      simultaneously, and send it to your audience through an invite or
      clickable link. Additionally, with tools like pausing, trimming,
      highlighting, and annotating, it allows users to create a more dynamic and
      clean video.
    </p>

    <Descriptions bordered layout="vertical" size="middle" column={1}>
      <Descriptions.Item label="Platforms Supported">
        Mobile (iOS) application, Desktop application, and Chrome Extension{' '}
        <a
          href="https://www.loom.com/download"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </Descriptions.Item>
      <Descriptions.Item label="Cost">
        <p>
          Loom is removing the limit (25) on the number of videos a user can
          access under its free plan, cutting the price of Loom Pro in half, and
          extending its free trial period of its premium Loom Pro service from
          14 to 30 days through July 1, 2020.{' '}
          <strong>
            It’s also making Loom Pro free for students and teachers at K-12
            schools, universities and other educational institutions with no
            time limit.
          </strong>
        </p>
        <p>
          For more info, visit{' '}
          <a
            href="https://www.loom.com/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.loom.com/pricing
          </a>
        </p>
      </Descriptions.Item>
      <Descriptions.Item label="Login in Requirements">
        Account is required.
      </Descriptions.Item>
      <Descriptions.Item label="Capacity">
        <ul>
          <li>
            <strong>Loom Basic:</strong> 25 video storage limit (
            <strong>
              Note: Loom Pro is now free for students and teachers.
            </strong>
            )
          </li>
          <li>
            <strong>Loom Pro:</strong> unlimited video storage
          </li>
        </ul>
      </Descriptions.Item>
      <Descriptions.Item label="Supplemental Resources">
        Once you download Loom, Loom provides a wonderfully curated tutorial
        guide explaining how to use Loom for specific fields and circumstances
        under their “How to use Loom” tab.
      </Descriptions.Item>
    </Descriptions>
  </div>
);
