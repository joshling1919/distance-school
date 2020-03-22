import React from 'react';
import Section from '../shared/Section';

const sections = [
  {
    title: 'How can I set my students up?',
    items: [
      {
        Title: () => 'Internet Essentials',
        Description: () =>
          'Xfinity is offering 60 days of free Internet Essentials service and will be increasing speeds for existing customers. The process is quick. If you need to talk to someone in Spanish, call 1-855-765-6995. For English, call 1-855-846-8376.',
      },
      {
        Title: () => 'Microsoft Teams',
        Description: () => (
          <span>
            Check out{' '}
            <a
              href="https://www.digitalinclusion.org/free-low-cost-internet-plans/"
              target="_blank"
              rel="noopener noreferrer"
            >
              this list of free & low-cost internet providers
            </a>{' '}
            through the National Digital Inclusion Alliance.
          </span>
        ),
      },
    ],
  },
  {
    title: 'Which platforms will allow me to host a virtual classroom space?',
    items: [
      {
        Title: () => 'Zoom',
        Description: () =>
          'You can host a meeting and invite students through a simple link - keep in mind that students will need to download the Zoom application on their devices. You can share your screen and have students interact through a chat box. Zoom has removed its 40-minute meeting limit restriction on its free Basic accounts for students and teachers at K-12 schools in America.',
      },
      {
        Title: () => 'Google Hangouts',
        Description: () => (
          <span>
            <a
              href="https://support.google.com/a/users/answer/9300131?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              You can use create a Hangout through Google Calendar,
            </a>
            , and share the link with students. Students can access Google
            Hangouts through mobile apps or their Chromebooks. You can share
            your screen and have students interact through a chat box.
          </span>
        ),
      },
    ],
  },
  {
    title: 'Where can I find complete lesson plans to teach my students?',
    items: [
      {
        Title: () => 'Khan Academy',
        Description: () => (
          <div>
            <p>
              Khan Academy has created lesson plans and schedule templates
              specifically for teachers and parents who are looking for
              immediate activities to do. Each unit lesson contains videos,
              practices, quizzes, and tests. Paired with a virtual classroom
              space platform and a way to keep students connected and
              accountable, this could be a powerful, low-lift way for you to
              continue educating students.
            </p>
            <ul>
              <li>
                <a
                  href="https://docs.google.com/document/d/e/2PACX-1vSZhOdEPAWjUQpqDkVAlJrFwxxZ9Sa6zGOq0CNRms6Z7DZNq-tQWS3OhuVCUbh_-P-WmksHAzbsrk9d/pub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Khan Academy Daily Schedules & Lessons
                </a>
              </li>
              <li>
                <a
                  href="https://khanacademy.zendesk.com/hc/en-us/articles/360040167432-How-can-Khan-Academy-be-used-for-remote-learning-during-school-closures-"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Khan Academy Remote Learning Guide
                </a>
              </li>
              <li>
                <a
                  href="https://www.khanacademy.org/resources/teacher-essentials"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Teacher Quick Start & Other Helpful Guides
                </a>
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
];

export default () =>
  sections.map(section => <Section key={section.title} {...section} />);
