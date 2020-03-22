import React from 'react';
import { Descriptions } from 'antd';
import Anchor from '../../shared/Anchor';

export default () => (
  <div>
    <p>
      <a
        href="https://www.screencastify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Screencastify
      </a>{' '}
      is an app that allows users to record, annotate and share lessons from
      their browser. Similar to Loom, it allows users to communicate ideas
      quickly and effectively as if you were right next to them. During
      recording, Screencastify positions a toolbox in the lower left-hand corner
      to allow users to toggle between different functions such as adding click
      animations, pausing, creating focus bubbles, and pulling up a stopwatch.
      And after your recording, you have the capabilities to crop, trim or merge
      any parts of your recorded video. At the end, Screencastify automatically
      uploads your file into Google drive or Youtube account, and creates a
      clickable link your audience can use.
    </p>

    <Descriptions bordered layout="vertical" size="middle" column={1}>
      <Descriptions.Item label="Platforms Supported">
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
