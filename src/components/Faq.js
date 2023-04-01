import React from 'react';
import styled from 'styled-components/macro';
import { FullWidthSection, MainButton } from '../assets/GlobalStyles';

const FaqWrapper = styled(FullWidthSection)`
  width: 70%;
  max-width: 900px;
  margin: 100px auto;
  min-height: auto;
  flex-direction: column;

  .questions-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .question-wrapper {
    padding: 20px 0;
    width: 50%;
  }

  .question {
    font-style: italic;
  }

  p {
    line-height: 1.5;
    text-align: center;
    font-size: 20px;
  }

  h2 {
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    width: 80%;

    p {
      width: 100%;
    }
  }
`;

const Faq = ({ data }) => {
  return (
    <FaqWrapper>
      <h2>Faq</h2>

      <div className="questions-wrapper">
        {data &&
          data.map((item, index) => {
            return (
              <div className="question-wrapper" key={index}>
                <p className="question">{item.fraga}</p>
                <p>{item.svar}</p>
              </div>
            );
          })}
      </div>
    </FaqWrapper>
  );
};

export default Faq;
