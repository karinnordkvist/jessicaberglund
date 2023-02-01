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

const Priser = () => {
  return (
    <OuterWrapper>
      <CustomHero imageURL="./images/294945001_1008707779747107_4929773751042745689_n.jpeg">
        <h1>Prislista</h1>
      </CustomHero>
      <CustomInnerWrapper>
        <p className="intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum
          consectetur ultrices turpis lectus. Amet commodo curabitur rutrum pro.
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
        title="Foto"
        text="Se ett urval av mina senaste projekt."
        buttonText="Till Foto"
        buttonColor="var(--color-neutral)"
        buttonTextColor="var(--color-darkHazel)"
        toLocation="/foto"
        bg="var(--color-darkHazel)"
        color="var(--color-neutral)"
        dir=""
        imgUrl="./images/313849679_573762377749840_447649959734290178_n.jpeg"
        imgAlt="Barnen leker i en lövhög"
      />
    </OuterWrapper>
  );
};

export default Priser;
