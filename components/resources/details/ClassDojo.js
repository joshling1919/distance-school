import React from 'react';
import { Descriptions } from 'antd';
import Anchor from '../../shared/Anchor';

export default () => (
  <div>
    <p>
      <a
        href="https://www.classdojo.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Class Dojo
      </a>{' '}
      is a school communication platform that helps educators build classroom
      and community culture by connecting teachers, students, and families. This
      Learning Management System allows educators to share feedback on what is
      happening in the classroom, communicate without the need to share phone
      numbers or contact details, and assign activities to entire classrooms or
      individual students. Additionally, Class Dojo is known for integrating
      concepts such as Growth Mindset and Empathy to improve social-emotional
      skills.
    </p>

    <Descriptions bordered layout="vertical" size="middle" column={1}>
      <Descriptions.Item label="Supported Platforms">
        Mobile, Desktop, and Tablet
      </Descriptions.Item>
      <Descriptions.Item label="Cost">100% Free</Descriptions.Item>
      <Descriptions.Item label="Login in Requirements">
        <ul>
          <li>
            <strong>Student:</strong> Login Required (Scan with assigned QR
            Code, Enter Class Code, or Sign in with Google)
          </li>
          <li>
            <strong>Teacher:</strong> Login Required
          </li>
        </ul>
      </Descriptions.Item>
      <Descriptions.Item label="Capabilities">
        <ul>
          <li>Connect with families </li>
          <li>Create classrooms</li>
          <li>
            Share photos, videos, files, events with families and students
            through Class Story and School Story
          </li>
          <li>Create an event</li>
          <li>Create and assign activities through Portfolio</li>
          <li>
            Students can submit photos, videos, journals, voice recordings
          </li>
          <li>Automatic translation for 30 languages</li>
        </ul>
      </Descriptions.Item>
      <Descriptions.Item label="Supplemental Resources">
        <ul>
          <li>
            <Anchor
              text="Remote Learning with ClassDojo Webinar"
              href="https://www.youtube.com/watch?v=OAEkfrwtAOI"
            />
          </li>
          <li>
            <Anchor
              text="Class Dojo Introduction"
              href="https://www.youtube.com/watch?v=vgZOhrytzwQ"
            />
          </li>
          <li>
            <Anchor
              text="Class Dojo Setup and Tips"
              href="https://www.youtube.com/watch?v=hb21jcADl3o"
            />
          </li>
          <li>
            <Anchor
              text="Class Dojo Portfolio Walkthrough"
              href="https://www.youtube.com/watch?v=uG7-axyuUcg"
            />
          </li>
        </ul>
      </Descriptions.Item>
    </Descriptions>
  </div>
);
