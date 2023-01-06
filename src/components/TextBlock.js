import React from 'react';
import styled from 'styled-components/macro';
import { FullWidthSection, MainButton } from '../assets/GlobalStyles';

const TextWrapper = styled(FullWidthSection)`
  width: 50%;
  max-width: 600px;
  margin: 100px auto;
  min-height: auto;
  flex-direction: column;

  p {
    padding: 20px 0;
    line-height: 1.5;
    text-align: center;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    width: 80%;

    p {
      width: 100%;
    }
  }
`;

const TextImage = () => {
  return (
    <TextWrapper>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum
        consectetur ultrices turpis lectus. Amet commodo curabitur rutrum proin
        pulvinar rhoncus semper donec. Sit integer morbi vestibulum felis.Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Dictum consectetur
        ultrices turpis lectus. Amet commodo curabitur rutrum proin pulvinar
        rhoncus semper donec. Sit integer morbi vestibulum felis.
      </p>

      <p>Kontakta mig för mer information och bokning.</p>
      <MainButton>Kontakta mig</MainButton>
    </TextWrapper>
  );
};

export default TextImage;
