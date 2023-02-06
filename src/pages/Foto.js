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
      <CustomHero imageURL="./images/298815221_1054639595193925_6596742984242335864_n.jpeg">
        <h1>FOTO</h1>
      </CustomHero>
      {/* <FloatingNav /> */}
      <TextBlock />
      <TextImageNav
        title="Priser"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum
          consectetur ultrices turpis lectus. Amet commodo"
        buttonText="Till Prislistan"
        buttonColor="var(--color-neutral)"
        buttonTextColor="var(--color-darkBrown)"
        toLocation="/priser"
        bg="var(--color-beige)"
        color="var(--color-neutral)"
        dir=""
        imgUrl="./images/294945001_1008707779747107_4929773751042745689_n.jpeg"
        imgAlt="Jessica stickar vid ett träd"
      />
    </div>
  );
};

export default Home;
