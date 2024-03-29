import React from 'react';

import { Collapse } from 'antd';
import Anchor from '../shared/Anchor';

const { Panel } = Collapse;

export default () => (
  <Collapse defaultActiveKey={[]}>
    <Panel header="How can I set my students up for remote learning?" key="1">
      <h2>Internet Essentials</h2>
      <p>
        Xfinity is offering 60 days of free Internet Essentials service and will
        be increasing speeds for existing customers. The process is quick. If
        you need to talk to someone in Spanish, call 1-855-765-6995. For
        English, call 1-855-846-8376.
      </p>
      <h2>If Xfinity Comcast is not offered in your area…</h2>
      <p>
        {' '}
        Check out{' '}
        <a
          href="https://www.digitalinclusion.org/free-low-cost-internet-plans/"
          target="_blank"
          rel="noopener noreferrer"
        >
          this list of free & low-cost internet providers
        </a>{' '}
        through the National Digital Inclusion Alliance.
      </p>
    </Panel>
    <Panel
      header="Which platforms will allow me to host a virtual classroom space?"
      key="2"
    >
      <h2>Zoom</h2>
      <p>
        You can host a meeting and invite students through a simple link - keep
        in mind that students will need to download the Zoom application on
        their devices. You can share your screen and have students interact
        through a chat box. Zoom has removed its 40-minute meeting limit
        restriction on its free Basic accounts for students and teachers at K-12
        schools in America.
      </p>
      <h2>Google Hangouts</h2>
      <p>
        <a
          href="https://support.google.com/a/users/answer/9300131?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          You can create a Hangout through Google Calendar
        </a>
        , and share the link with students. Students can access Google Hangouts
        through mobile apps or their Chromebooks. You can share your screen and
        have students interact through a chat box.
      </p>
    </Panel>
    <Panel
      header="Where can I find complete lesson plans to teach my students?"
      key="3"
    >
      <h2>Khan Academy</h2>
      <p>
        Khan Academy has created lesson plans and schedule templates
        specifically for teachers and parents who are looking for immediate
        activities to do. Each unit lesson contains videos, practices, quizzes,
        and tests. Paired with a virtual classroom space platform and a way to
        keep students connected and accountable (such as a Google Hangout or
        Classroom assignment), this could be a powerful, low-lift way for you to
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
      <br />
      <h2>
        <Anchor
          text="Great Minds: Knowledge on the Go"
          href="https://gm.greatminds.org/en-us/knowledgeonthego"
        ></Anchor>
      </h2>
      <p>
        Great Minds is uploading <strong>daily lesson videos</strong> and
        shareable instructional content (in the form of worksheet PDFs) for
        free, utilizing the Eureka Math curriculum for math content (grades
        K-12), the Wit & Wisdom Curriculum for ELA (grades K-8), and PHD Science
        for grades 3-5. Utilizing their modules and downloadable student content
        will get you through a lesson from start to finish.
      </p>
    </Panel>
    <Panel
      header="What are some supplemental resources I can start using with my students?"
      key="4"
    >
      <h2>
        General:{' '}
        <a
          href="https://quizlet.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quizlet
        </a>
      </h2>
      <p>
        Supplement instruction by sending links to your students that will allow
        them to review previously taught concepts.
      </p>
      <h2>
        Math:{' '}
        <a
          href="https://teacher.desmos.com/collections/featured"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desmos Classroom Activities
        </a>
      </h2>
      <p>
        Desmos offers free math classroom activities for elementary and
        secondary-age students, backed by the power of their visual online
        calculator.
      </p>
      <h2>
        General:{' '}
        <a
          href="https://www.showme.com/topic/language"
          target="_blank"
          rel="noopener noreferrer"
        >
          ShowMe
        </a>
      </h2>
      <p>
        ShowMe allows you to view and create lessons across all contents to
        share with your students. Using your mouse’s touchpad or an iPad and
        voice audio, you can more effectively share personalized examples and
        work to your students. Teachers can create videos and receive access to
        basic features for free.
      </p>
      <h2>
        Literacy & Current Events:{' '}
        <a
          href="https://newsela.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Newsela
        </a>
      </h2>
      <p>
        Newsela is providing free access to all content for the remainder of the
        2019/2020 school year. The platform allows teachers to adjust the
        content of news articles to the lexile scores of their students. Simply
        share a link to your Google Classroom (see below) to get students
        reading.
      </p>

      <p>
        <strong>This is just a start.</strong> There are a lot more awesome,
        educator-curated resources on the <a href="/">Resources</a> page!
      </p>
    </Panel>
    <Panel header="What does the virtual classroom lesson look like?" key="5">
      <h2>GSuite & Google Classroom</h2>
      <p>
        Google Classroom allows you to create classes and lets your students
        join through a link. You can easily upload and organize materials/links,
        questions, and quizzes, while continuing to keep students accountable
        with due dates, grades, and comment feedback. It is an awesome platform
        to create dynamic and personalized remote lessons. The most effective
        way to utilize GSuite would be to combine both full/partial Khan Academy
        lessons with materials and activities from other resources.
      </p>
      <ul>
        <li>
          <a
            href="https://storage.googleapis.com/teachfromhome.appspot.com/Teach%20from%20Home_%20A%20Guide%20for%20Teachers.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Teach From Home Toolkit
          </a>{' '}
          - a <strong>step-by-step</strong> guide to starting your first online
          classroom
        </li>
        <li>
          <a
            href="https://teachfromhome.google/intl/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Teach From Home
          </a>{' '}
          - a more comprehensive guide of how to use Google tools to teach your
          students
        </li>
      </ul>
      <p>
        For students and teachers who are new to Google Classroom, it may be
        helpful to use either Zoom or Google Hangouts to screen share and
        complete the first assignments together.
      </p>
      <p>
        Note that there are{' '}
        <a
          href="https://support.google.com/edu/classroom/answer/7582372"
          target="_blank"
          rel="noopener noreferrer"
        >
          limitations to using Google Classroom
        </a>{' '}
        depending on both which Gmail account you are using, and which ones your
        students are using.
      </p>
    </Panel>
  </Collapse>
);
