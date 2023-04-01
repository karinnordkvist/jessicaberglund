import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import {
  Hero,
  FullWidthSection,
  FullWidthVertical,
} from '../assets/GlobalStyles';
import TextBlock from '../components/TextBlock';
import TextImageNav from '../components/TextImageNav';
import sanityClient from '../client.js';
import { PortableText } from '@portabletext/react';

const CustomHero = styled(Hero)`
  min-height: 70vh;

  h1 {
    font-family: var(--font-secondary);
    font-size: 130px;
    color: var(--color-neutral);
  }
`;

const OmMig = () => {
  const [aboutData, setAboutData] = useState();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'about']{
                    _id,
                    "hero_img":hero_img.asset->{url, tags, title},
                    s1_text,
                  }`
      )
      .then((data) => setAboutData(data))
      .catch(console.error);
  }, []);
  console.log(aboutData);

  return (
    <div>
      <CustomHero imageURL="./images/298815221_1054639595193925_6596742984242335864_n.jpeg">
        <h1>Om mig</h1>
      </CustomHero>
      <FullWidthVertical>
        {aboutData && <PortableText value={aboutData[0].s1_text} />}
      </FullWidthVertical>
    </div>
  );
};

export default OmMig;
