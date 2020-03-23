import React from 'react';
import { Descriptions } from 'antd';
import Anchor from '../../shared/Anchor';

export default () => (
  <div>
    <p>
      <Anchor text="Kahoot" href="https://kahoot.com" /> is an in-game learning
      platform designed for social learning. Creators can generate
      multiple-choice quizzes, which then can be accessed by the user via a web
      browser or the Kahoot app. There are currently two versions of Kahoots- a
      live version where learners gather around a common screen and a challenge
      version which is a self-paced kahoots that students can play on their own
      devices. All players will connect using a generated game PIN shown on the
      common screen, and use a device to answer questions created by the
      creator. Kahoot is an ideal way to assess student mastery in a game
      environment and o takes away the monotony of a traditional formative
      assessment.
    </p>

    <Descriptions bordered layout="vertical" size="middle" column={1}>
      <Descriptions.Item label="Supported Platforms">
        Mobile, Desktop, and Tablet
      </Descriptions.Item>
      <Descriptions.Item label="Cost">
        <Anchor
          text="https://kahoot.com/schools/plans/"
          href="https://kahoot.com/schools/plans/"
        />
        <p>Basic plan is free, and premium plan is $6 per month.</p>
        <p>
          <strong>
            Eligible schools and higher education institutions will be able to
            use Kahoot! Premium at no cost starting March 1 for the remaining
            months of the academic year.
          </strong>
        </p>
      </Descriptions.Item>
      <Descriptions.Item label="Login in Requirements">
        Login required for teachers. For students, accounts are not required.
      </Descriptions.Item>
      <Descriptions.Item label="Capabilities">
        <ul>
          <li>Create Traditional Live Game</li>
          <li>Create Kahoot Challenges</li>
          <li>Set Due Dates</li>
          <li>
            Differentiation via personalized learning (only on mobile app)
          </li>
          <li>Create Team Spaces with Coworkers</li>
          <li>Access to Question Bank</li>
          <li>
            Assess via multiple choice, true or false, open-ended, and puzzle
          </li>
          <li>Gather information via polls</li>
          <li>Create Content Slides</li>
          <li>
            View data, see feedback and player progress through advanced
            reporting
          </li>
        </ul>
      </Descriptions.Item>
      <Descriptions.Item label="Supplemental Resources">
        <ul>
          <li>
            <Anchor
              text="Kahoot for distance learning Webinar"
              href="https://www.youtube.com/watch?v=uYuGwp_wBDo"
            />
          </li>
          <li>
            <Anchor
              text="Kahoot Distance Learning Guides"
              href="https://kahoot.com/schools/distance-learning/"
            />
          </li>
          <li>
            <Anchor
              text="How to use kahoot question bank"
              href="https://www.youtube.com/watch?v=kRsu7fcdDOU"
            />
          </li>
          <li>
            <Anchor
              text="How to create a kahoot"
              href="https://www.youtube.com/watch?v=KJgZZQcsSPk"
            />
          </li>
          <li>
            <Anchor
              text="Kahoot for formative assessment"
              href="https://www.youtube.com/watch?v=CLS5H41uf1Q"
            />
          </li>
        </ul>
      </Descriptions.Item>
    </Descriptions>
  </div>
);
