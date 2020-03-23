import React from 'react';
import { Descriptions } from 'antd';
import Anchor from '../../shared/Anchor';

export default () => (
  <div>
    <p>
      <Anchor text="Quizlet" href="https://quizlet.com/" /> allows students and
      educators to create, study, and engage in any material they are trying to
      master through the creation of online flash cards. Through machine
      learning and spaced repetition, it is an ideal way for students to quickly
      learn and review material.
    </p>
    <p>
      Teachers can create a study set divided by terms and definition and
      afterwards share it through social media or add it to a class or a link to
      the set. But don't reinvent the wheel! You are meant to share and use the
      material already previously created! There are over 300 million study sets
      of different content you can search and add to your own classroom.
      Following the creation of your flashcards there are 5 study mode options
      and 2 play mode options students can choose from.
    </p>
    <p>
      As an educator, you have an additional play mode known as “Quizlet Live.”
      This is an in-class game that divides four or more students into teams.
      Students will see the same question prompt on their own device, but will
      each have different answer options on their device. This requires students
      to work together to get the correct answer. Additionally, Quizlet Teacher
      allows for teachers to engage students in formative assessments through a
      tool known as “Class Progress,” a tool used to track student’s progress
      and give insight into areas of strength and weakness.
    </p>

    <Descriptions bordered layout="vertical" size="middle" column={1}>
      <Descriptions.Item label="Supported Platforms">
        Mobile, Desktop, and Tablet
      </Descriptions.Item>
      <Descriptions.Item label="Cost">
        <ul>
          <li>
            <strong>Basic:</strong> Free
          </li>
          <li>
            <strong>Plus:</strong> $1.99 per month
          </li>
          <li>
            <strong>Go:</strong> $1.00 per month
          </li>
        </ul>
        <strong>
          Teachers will be getting free access to Quizlet Teacher until June 30,
          2020.
        </strong>
      </Descriptions.Item>
      <Descriptions.Item label="Login in Requirements">
        Accounts are required for teachers and students. Students Over 13 can
        sign up with Google or Facebook account. Students under 13 can sign up
        with parent’s email or with school issued Google account.
      </Descriptions.Item>
      <Descriptions.Item label="Capabilities">
        <ul>
          <li>Access to Question Bank</li>
          <li>Machine based learning + Space Repetition</li>
          <li>
            5 different studying modes: Learn, Flashcard, Write, Spell, Test
          </li>
          <li>Create Audio Recordings</li>
          <li>Translation Tool</li>
          <li>Progress check points</li>
          <li>Create Focus Cards</li>
          <li>Study reminders</li>
          <li>3 different game modes: Match, Gravity, Live</li>
          <li>Track Classroom Progress</li>
        </ul>
      </Descriptions.Item>
      <Descriptions.Item label="Supplemental Resources">
        <ul>
          <li>
            <Anchor
              text="Quizlet Teacher Guide Playlist"
              href="https://www.youtube.com/watch?v=d-ENHNcuKgw&list=PLjvTuBcskqZFPdwJi9Tj_h7ZPdMuAUTaJ"
            />
          </li>
          <li>
            <Anchor
              text="Quizlet Overview for Teachers Webinar"
              href="https://www.youtube.com/watch?v=hDkUcABKF_g"
            />
          </li>
          <li>
            <Anchor
              text="Creative ways to use Quizlet in classroom"
              href="https://www.youtube.com/watch?v=dVy5HX9kmSw"
            />
          </li>
        </ul>
      </Descriptions.Item>
    </Descriptions>
  </div>
);
