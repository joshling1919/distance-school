import React from 'react';
import Link from 'next/link';
import { media } from '../../theme';

export default () => (
  <section>
    <div className="top-level-resource">
      <h2>Our Guides</h2>
      <ul>
        <li>
          <Link href="/guides/for-teachers">For Teachers</Link>
        </li>
        <li>
          <Link href="/guides/for-parents">For Parents</Link>
        </li>
      </ul>
    </div>
    <div className="top-level-resource">
      <h2>Events and Webinars</h2>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://register.gotowebinar.com/recording/viewRecording/9068656862803168523/8587753566622502407/chris.d.hua@gmail.com?registrantKey=4894914022365130509&type=ATTENDEEEMAILRECORDINGLINK"
          >
            Khan Academy Webinar
          </a>
        </li>
        <li>
          <a
            href="https://zoom.us/webinar/register/weeklylivedemo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zoom Webinar
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=Scc_ecsEb8M"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quizlet Webinar
          </a>
        </li>
      </ul>
    </div>
    <style jsx>{`
      section {
        display: flex;
        flex-direction: column;
      }
      @media ${media.tablet} {
        section {
          flex-direction: row;
        }
      }
      .top-level-resource {
        flex: 1;
      }
    `}</style>
  </section>
);
