import React from 'react';
import styled from 'styled-components/macro';
import { FullWidthSection } from '../assets/GlobalStyles';
import BlockContent from '@sanity/block-content-to-react';

const TextImageWrapper = styled(FullWidthSection)`
  width: 70%;
  margin: 100px auto;
  min-height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    padding: 10px 60px 10px 0;
    font-size: 18px;
    line-height: 1.6;
  }

  img {
    width: 50%;
    max-width: 50%;
    max-height: 600px;
    object-fit: cover;
  }

  @media (max-width: 1200px) {
    width: 100%;
    flex-direction: row;

    p {
      width: 50%;
    }
    img {
      max-width: 50%;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;

    p {
      width: 100%;
    }
    img {
      max-width: 80%;
    }
  }
`;

const TextImage = ({ introtext, introimg }) => {
  console.log(introtext);
  return (
    <TextImageWrapper>
      {introtext && <BlockContent blocks={introtext} />}

      {/* <p>
        {introtext &&
          introtext.map((item, index) => {
            return item;
          })}
      </p> */}
      <img src={introimg} alt="Jessica stickar vid ett träd" />
    </TextImageWrapper>
  );
};

export default TextImage;
