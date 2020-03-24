import React from 'react';
import Resources from '../components/resources';
import Intro from '../components/shared/Intro';
import Anchor from '../components/shared/Anchor';

const Index = () => (
  <div>
    <Intro>
      <p>
        Over the last week, multiple organizations, such as{' '}
        <a
          href="https://www.techforlearners.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tech for Learners
        </a>
        ,{' '}
        <a
          href="https://www.albert.io/blog/tools-for-distance-learning/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Albert
        </a>
        , and{' '}
        <a
          href="https://digitalpromise.org/online-learning/online-learning-resources/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Digital Promise
        </a>{' '}
        have graciously compiled large banks of resources that educators and
        parents can turn to.
      </p>
      <p>
        The vast amount of available resources is both encouraging and somewhat
        intimidating. We want to simplify things by sharing what we think are
        the best tools to start with.
      </p>
      <p>
        If you're looking for somewhere to start, Khan Academy and Google have
        both provided excellent, comprehensive guides for how to teach remotely:
      </p>
      <ul>
        <li>
          <Anchor
            text="Khan Academy's response to school closures"
            href="https://khanacademy.zendesk.com/hc/en-us/articles/360040167432-How-can-Khan-Academy-be-used-for-remote-learning-during-school-closures-"
          />
        </li>
        <li>
          <Anchor
            text="Google's Teach From Home guide"
            href="https://teachfromhome.google/"
          />
        </li>
      </ul>

      <p>
        Several companies are also holding webinars on how to use their tools to
        facilitate and enhance distance learning.{' '}
        <Anchor
          href="https://docs.google.com/spreadsheets/d/1DCWiz6gFzG-wODlCkNs_en1NF9N_1wGwpRrywhhGklQ/edit?usp=sharing"
          text="Stay up to date with those webinars here."
        />
      </p>

      <p>Finally, please check out the curated list of resources below.</p>
    </Intro>
    <Resources />

    <style jsx>{`
      h1 {
        margin: 20px 0;
      }

      section {
        margin-bottom: 40px;
      }
    `}</style>
  </div>
);

export default Index;
