import React from 'react';
import styled from 'styled-components/macro';
import { FullWidthSection, MainButton } from '../assets/GlobalStyles';

const TextWrapper = styled(FullWidthSection)`
  flex-direction: column;
  background: var(--color-darkBrown);
  height: auto;
  min-height: auto;
  padding: 30px 0;

  p {
    color: var(--color-neutral);
    font-size: 12px;
    line-height: 1.5;
    text-align: center;
  }

  a {
    color: var(--color-neutral);
    font-weight: 400;
    font-style: italic;
  }

  @media (max-width: 768px) {
    width: 80%;

    p {
      width: 100%;
    }
  }
`;

const Footer = () => {
  const now = new Date().toLocaleDateString().substring(0, 4);

  return (
    <TextWrapper>
      <p>© Jessica Berglund – {now}</p>
      <p>
        Sidan är byggd och designad av{' '}
        <a href="https://cookieworks.se">Cookie D+D</a>
      </p>
    </TextWrapper>
  );
};

export default Footer;
