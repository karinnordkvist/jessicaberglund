import React from 'react';
import styled from 'styled-components/macro';
import { FullWidthSection } from '../assets/GlobalStyles';
import { Link } from 'react-router-dom';

const PhotoLinksWrapper = styled(FullWidthSection)`
  width: 70%;
  margin: 0 auto;
  min-height: auto;
  padding: 150px 0 50px;

  div {
    width: 50%;
  }

  p {
    padding: 40px 60px 40px;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
    padding: 0 50px;
  }

  h3 {
    font-family: var(--font-secondary);
    font-weight: 400;
    font-size: 80px;
    text-align: center;
    transform: translateY(-50px);
    color: var(--color-neutral);
  }

  @media (max-width: 1200px) {
    width: 90%;
    flex-direction: row;

    img {
      padding: 20px;
    }

    h3 {
      transform: translateY(-80px);
    }

    @media (max-width: 768px) {
      h3 {
        transform: translateY(-66px);
        font-size: 60px;
      }
    }

    @media (max-width: 690px) {
      h3 {
        transform: translateY(-50px);
        font-size: 40px;
      }
    }
  }
`;

const DualPhotoLinks = () => {
  return (
    <div style={{ background: 'var(--color-lightHazel)' }}>
      <PhotoLinksWrapper>
        <Link to="/foto">
          <img
            src="./images/313849679_573762377749840_447649959734290178_n.jpeg"
            alt="Barn leker i höstlöven"
          />
          <h3>FOTO</h3>
        </Link>
        <Link to="/flora">
          <img
            src="./images/312961694_937441233901670_5917840965797641745_n.jpeg"
            alt="Jessica i dörröppning vid blomma"
          />
          <h3>FLORA</h3>
        </Link>
      </PhotoLinksWrapper>
    </div>
  );
};

export default DualPhotoLinks;
