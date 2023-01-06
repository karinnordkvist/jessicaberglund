import React from 'react';
import styled from 'styled-components/macro';
import { FullWidthSection } from '../assets/GlobalStyles';

const TextImageWrapper = styled(FullWidthSection)`
  width: 70%;
  margin: 0 auto;
  min-height: auto;

  p {
    padding: 40px 60px 40px;
    line-height: 1.5;
  }

  img {
    max-width: 50%;
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

const TextImage = () => {
  return (
    <TextImageWrapper>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum
        consectetur ultrices turpis lectus. Amet commodo curabitur rutrum proin
        pulvinar rhoncus semper donec. Sit integer morbi vestibulum felis.Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Dictum consectetur
        ultrices turpis lectus. Amet commodo curabitur rutrum proin pulvinar
        rhoncus semper donec. Sit integer morbi vestibulum felis. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Dictum consectetur ultrices
        turpis lectus. Amet commodo curabitur rutrum proin pulvinar rhoncus
        semper donec. Sit integer morbi vestibulum felis.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Dictum consectetur ultrices turpis
        lectus. Amet commodo curabitur rutrum proin pulvinar rhoncus semper
        donec. Sit integer morbi vestibulum felis.
      </p>
      <img
        src="./images/311314965_1153875888877486_5513361764347484917_n.jpeg"
        alt="Jessica stickar vid ett träd"
      />
    </TextImageWrapper>
  );
};

export default TextImage;
