import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components/macro';
import { Hero, InnerWrapper } from '../assets/GlobalStyles';

import TextImageNav from '../components/TextImageNav';
import FloatingNav from '../components/FloatingNav';
// import sanityClient from '../client.js';

const OuterWrapper = styled.section`
  .intro {
    font-size: 32px;
    font-weight: 400;
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

  h3 {
    font-size: 28px;
    text-align: center;
    margin-top: 40px;
  }
`;

const CustomHero = styled(Hero)`
  min-height: 70vh;
  background-repeat: no-repeat;
  object-fit: cover;
  background-position: center 40%;

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

const Kontakt = () => {
  return (
    <OuterWrapper>
      <CustomHero imageURL="./images/285716810_688908102409223_3961999101083243942_n.jpeg">
        <h1>Kontakt</h1>
      </CustomHero>
      <CustomInnerWrapper>
        <p className="info" style={{ maxWidth: '90%', margin: 'auto' }}>
          I min egen lilla värld, bland växthus, sådder och bla bla bla. En
          kortare, lite drömmig text om dig. I min egen lilla värld, bland
          växthus, sådder och bla bla bla. En kortare, lite drömmig text om dig.
          I min egen lilla värld, bland växthus, sådder och bla bla bla. En
          kortare, lite drömmig text om dig.
        </p>

        <p className="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum
          consectetur ultrices tu. Här borde det vara en lite presenterande text
          om vem du är och vad din filosofi är typ. Varför ska man kontakta dig?
        </p>

        <p className="info">akta dig?</p>

        <h3>Vill du samarbeta?</h3>
        <p className="info">
          Jag jobbar mer än gärna med andra kreatörer eller entreprenörer. Hör
          av dig så pratar vi mer! Läs mer om samarbeten{' '}
          <Link to="/samarbeten">här.</Link>
        </p>
      </CustomInnerWrapper>

      <TextImageNav
        title="Flora"
        text="Se ett urval av mina senaste projekt."
        buttonText="Till Flora"
        buttonColor="var(--color-neutral)"
        buttonTextColor="var(--color-darkMoss)"
        toLocation="/flora"
        bg="var(--color-darkMoss)"
        color="var(--color-neutral)"
        dir=""
        imgUrl="./images/290981609_369272635122405_6081275867941990378_n.jpeg"
        imgAlt="Barnen leker i en lövhög"
      />
      <FloatingNav />
    </OuterWrapper>
  );
};

export default Kontakt;
