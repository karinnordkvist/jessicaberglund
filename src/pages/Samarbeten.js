import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Hero, InnerWrapper } from '../assets/GlobalStyles';
import FloatingNav from '../components/FloatingNav';
import sanityClient from '../client.js';
import { PortableText } from '@portabletext/react';

const CustomHero = styled(Hero)`
  min-height: 70vh;
  background-position: center center;

  h1 {
    font-family: var(--font-secondary);
    font-size: 130px;
    color: var(--color-neutral);
  }
`;

const CustomInnerWrapper = styled(InnerWrapper)`
  max-width: 600px;
  padding: 50px 0;

  p {
    padding: 10px 0;
    line-height: 1.4;
  }

  h4 {
    margin-top: 10px;
  }

  .content-image {
    max-width: 100%;
  }

  a {
    text-decoration: none;
    font-family: var(--font-primary);
    font-weight: 400;
    background: var(--color-darkDijon);
    color: var(--color-neutral);
    padding: 18px 40px;
    cursor: pointer;
    display: inline-block;
    margin: 20px 0;
  }
`;

const Samarbeten = () => {
  const [collabData, setCollabData] = useState();

  const myPortableTextComponents = {
    types: {
      image: ({ value }) => (
        <img
          className="content-image"
          alt={value.asset.alt}
          src={value.asset.url}
        />
      ),
    },
  };

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'samarbeten']{
                    _id,
                    "hero_img":hero_img.asset->{url, tags, title},
                    s1_text[]{
                    ...,
                    _type == "image" => {
                      asset->{url, tags, title},
                    }
                    }
                  }`
      )
      .then((data) => setCollabData(data))
      .catch(console.error);
  }, []);
  console.log(collabData);

  return (
    <div>
      {collabData && (
        <CustomHero imageURL={collabData[0].hero_img.url}>
          <h1>Samarbeten</h1>
        </CustomHero>
      )}
      <CustomInnerWrapper>
        {collabData && (
          <PortableText
            value={collabData[0].s1_text}
            components={myPortableTextComponents}
          />
        )}
      </CustomInnerWrapper>
      <FloatingNav />
    </div>
  );
};

export default Samarbeten;
