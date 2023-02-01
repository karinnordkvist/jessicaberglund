import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components/macro';
import { Hero, InnerWrapper } from '../assets/GlobalStyles';

import TextImageNav from '../components/TextImageNav';
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
        <p className="intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum
          consectetur ultrices turpis lectus. Amet curabitur rutrum pro.
        </p>

        <p className="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum
          consectetur ultrices tu.
        </p>
        <h3>Vill du samarbeta?</h3>
        <p className="info">
          Läs mer om samarbeten <Link to="/samarbeten">här.</Link>
        </p>
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

export default Kontakt;
