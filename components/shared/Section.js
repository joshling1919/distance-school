import React from 'react';

const Section = ({ title, items }) => {
  return (
    <section>
      <h2>{title}</h2>
      <div className="resources-container">
        {items.map(({ Title, Description }, i) => (
          <div key={`section-${i}`} className="resources">
            <h3>
              <Title />
            </h3>
            <p>
              <Description />
            </p>
          </div>
        ))}
      </div>
      <style jsx>{`
        section {
          margin-bottom: 40px;
        }
        h2 {
          margin: 10px 0;
        }
        .resources-container {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </section>
  );
};

export default Section;