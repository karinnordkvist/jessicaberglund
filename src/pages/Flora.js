import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { PortableText } from '@portabletext/react';
import {
  FullWidthBackgroundImage,
  Hero,
  InnerWrapper,
} from '../assets/GlobalStyles';
import FloatingNav from '../components/FloatingNav';
import TextImage from '../components/TextImage';
import DualPhotoLinks from '../components/DualPhotoLinks';
import TextBlock from '../components/TextBlock';
import TextImageNav from '../components/TextImageNav';
import sanityClient from '../client.js';

const OuterWrapper = styled.section`
  .intro {
    font-size: 32px;
    text-align: center;
    padding: 20px 0;
  }

  .info {
    font-size: 16px;
    text-align: center;
    padding: 10px 0;
  }
`;

const CustomInnerWrapper = styled(InnerWrapper)`
  max-width: 600px;
  padding: 50px 0;

  p {
    padding: 5px 0;
  }
`;

const CustomHero = styled(Hero)`
  min-height: 70vh;
  background-position: center center;

  h1 {
    font-family: var(--font-secondary);
    font-size: 130px;
    color: var(--color-neutral);
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  h3 {
    font-family: var(--font-primary);
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 10px;
  }

  .text-wrapper {
    width: 60%;
  }
`;

const data = [
  {
    namn: 'Bröllop',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum consectetur ultrices turpis lectus. Amet commodo curabitur rutrum proin pulvinar rhoncus semper donec. Sit integer morbi vestibulum felis.Lorem ipsum',
    pris: 'Pris från zxxxxxx',
  },
  {
    namn: 'Familj',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum consectetur ultrices turpis lectus. Amet commodo curabitur rutrum proin pulvinar rhoncus semper donec. Sit integer morbi vestibulum felis.Lorem ipsum',
    pris: 'Pris från zxxxxxx',
  },
  {
    namn: 'Gravid',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum consectetur ultrices turpis lectus. Amet commodo curabitur rutrum proin pulvinar rhoncus semper donec. Sit integer morbi vestibulum felis.Lorem ipsum',
    pris: 'Pris från zxxxxxx',
  },
  {
    namn: 'Barn',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum consectetur ultrices turpis lectus. Amet commodo curabitur rutrum proin pulvinar rhoncus semper donec. Sit integer morbi vestibulum felis.Lorem ipsum',
    pris: 'Pris från zxxxxxx',
  },
];

const Flora = () => {
  const [floraData, setFloraData] = useState();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'flora']{
                    _id,
                    "hero_img":hero_img.asset->{url, tags, title},
                    s1_text,
                  }`
      )
      .then((data) => setFloraData(data))
      .catch(console.error);
  }, []);
  console.log(floraData);

  return (
    <OuterWrapper>
      <CustomHero imageURL="./images/326739964_195192789757743_5301976599399459507_n.jpeg">
        <h1>Flora</h1>
      </CustomHero>
      <CustomInnerWrapper>
        {floraData && <PortableText value={floraData[0].s1_text} />}
      </CustomInnerWrapper>

      <TextImageNav
        title="Kontakta mig"
        text=""
        buttonText="Till Kontakt"
        buttonColor="var(--color-moss)"
        buttonTextColor="var(--color-neutral)"
        toLocation="/foto"
        bg="var(--color-darkMoss)"
        color="var(--color-lightMoss)"
        dir=""
        imgUrl="./images/285716810_688908102409223_3961999101083243942_n.jpeg"
        imgAlt="Jessica vattnar odlingarna"
      />
      <FloatingNav />
    </OuterWrapper>
  );
};

export default Flora;
