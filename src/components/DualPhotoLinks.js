import React from 'react';
import styled from 'styled-components/macro';
import { FullWidthSection } from '../assets/GlobalStyles';
import { Link } from 'react-router-dom';

const PhotoLinksWrapper = styled(FullWidthSection)`
  width: 70%;
  margin: 0 auto;
  min-height: auto;
  padding: 50px 0;

  p {
    padding: 40px 60px 40px;
    line-height: 1.5;
  }

  img {
    max-width: 50%;
    padding: 0 50px;
  }

  @media (max-width: 1200px) {
    width: 90%;
    flex-direction: row;

    img {
      padding: 20px;
    }
  }
`;

const DualPhotoLinks = () => {
  return (
    <PhotoLinksWrapper>
      <img
        src="./images/311314965_1153875888877486_5513361764347484917_n.jpeg"
        alt="Jessica stickar vid ett träd"
      />
      <img
        src="./images/311314965_1153875888877486_5513361764347484917_n.jpeg"
        alt="Jessica stickar vid ett träd"
      />
    </PhotoLinksWrapper>
  );
};

export default DualPhotoLinks;
