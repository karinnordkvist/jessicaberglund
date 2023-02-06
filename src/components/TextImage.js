import React from 'react';
import styled from 'styled-components/macro';
import { FullWidthSection } from '../assets/GlobalStyles';

const TextImageWrapper = styled(FullWidthSection)`
  width: 70%;
  margin: 100px auto;
  min-height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    padding: 40px 60px 40px;
    line-height: 1.5;
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

const TextImage = ({ data }) => {
  return (
    <TextImageWrapper>
      <p>{data[0].intro_text}</p>
      <img src={data[0].intro_image.url} alt="Jessica stickar vid ett träd" />
    </TextImageWrapper>
  );
};

export default TextImage;
