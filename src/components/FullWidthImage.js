import React from 'react';
import styled from 'styled-components/macro';
import { FullWidthBackgroundImage } from '../assets/GlobalStyles';
import { Link } from 'react-router-dom';

const PhotoLinksWrapper = styled(FullWidthBackgroundImage)`
  width: 100%;
  background: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: var(--font-secondary);
    color: ${(props) => props.fontColor};
    font-size: 150px;
    font-weight: 400;
  }

  @media (max-width: 1200px) {
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 100px;
    }
  }

  @media (max-width: 690px) {
    h1 {
      font-size: 70px;
    }
  }
`;

const FullWidthImage = ({ data, bg, text, fontColor, path }) => {
  return (
    <Link to={path}>
      <PhotoLinksWrapper bg={bg} fontColor={fontColor}>
        <h1>{text}</h1>
      </PhotoLinksWrapper>
    </Link>
  );
};

export default FullWidthImage;
