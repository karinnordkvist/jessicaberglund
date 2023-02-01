import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
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
// import sanityClient from '../client.js';

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
  return (
    <OuterWrapper>
      <CustomHero imageURL="./images/326739964_195192789757743_5301976599399459507_n.jpeg">
        <h1>Flora</h1>
      </CustomHero>
      <CustomInnerWrapper>
        <p className="intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum
          consectetur ultrices turpis lectus. Amet curabitur rutrum pro.
        </p>

        <p className="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum
          consectetur ultrices turpis lectus. Amet commodo curabitur rutrum
          proin pulvinar rhoncus semper donec. Sit integer morbi vestibulum
          felis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum
          consectetur ultrices turpis lectus. Amet commodo curabitur rutrum
          proin pulvinar rhoncus semper donec. Sit integer morbi vestibulum
          felis.
        </p>

        <p className="info">Har du frågor? Kontakta mig så pratar vi om det.</p>
      </CustomInnerWrapper>
      <CustomInnerWrapper>
        {data.map((item, index) => {
          return (
            <Item key={item.namn}>
              <div className="text-wrapper">
                <h3>{item.namn}</h3>
                <p>{item.text}</p>
              </div>
              <div>
                <p>{item.pris}</p>
              </div>
            </Item>
          );
        })}
      </CustomInnerWrapper>

      <TextImageNav
        title="Kontakta mig"
        text=""
        buttonText="Till Kontakt"
        buttonColor="var(--color-darkTerra)"
        buttonTextColor="var(--color-neutral)"
        toLocation="/foto"
        bg="var(--color-lightTerra)"
        color="var(--color-darkTerra)"
        dir=""
        imgUrl="./images/285716810_688908102409223_3961999101083243942_n.jpeg"
        imgAlt="Jessica vattnar odlingarna"
      />
      <FloatingNav />
    </OuterWrapper>
  );
};

export default Flora;
