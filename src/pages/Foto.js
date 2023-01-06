import React from 'react';
import styled from 'styled-components/macro';
import { Hero } from '../assets/GlobalStyles';
// import FloatingNav from '../components/FloatingNav';
import TextBlock from '../components/TextBlock';
import TextImageNav from '../components/TextImageNav';

// import sanityClient from '../client.js';

const CustomHero = styled(Hero)`
  min-height: 70vh;

  h1 {
    font-family: var(--font-secondary);
    font-size: 130px;
    color: var(--color-neutral);
  }
`;

const Home = () => {
  return (
    <div>
      <CustomHero imageURL="./images/314379697_2072911416246862_8553839296102421913_n.jpeg">
        <h1>FOTO</h1>
      </CustomHero>
      {/* <FloatingNav /> */}
      <TextBlock />
      <TextImageNav bg="var(--color-darkTerra)" color="var(--color-neutral)" />
    </div>
  );
};

export default Home;
