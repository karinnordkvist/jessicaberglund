import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Hero, InnerWrapper } from '../assets/GlobalStyles';
import TextBlock from '../components/TextBlock';
import TextImageNav from '../components/TextImageNav';
import Faq from '../components/Faq';
import sanityClient from '../client.js';
import { PortableText } from '@portabletext/react';

const CustomHero = styled(Hero)`
  min-height: 70vh;

  h1 {
    font-family: var(--font-secondary);
    font-size: 130px;
    color: var(--color-neutral);
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 80px;
    }
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
`;

const Foto = () => {
  const [fotoData, setFotoData] = useState();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'foto']{
                    _id,
                    faq_questions,
                    s1_text,
                  }`
      )
      .then((data) => setFotoData(data))
      .catch(console.error);
  }, []);
  // console.log(fotoData[0].faq_questions);

  return (
    <div>
      <CustomHero imageURL="./images/298815221_1054639595193925_6596742984242335864_n.jpeg">
        <h1>FOTO</h1>
      </CustomHero>
      {/* <FloatingNav /> */}
      {/* <TextBlock /> */}

      <CustomInnerWrapper>
        {fotoData && <PortableText value={fotoData[0].s1_text} />}
      </CustomInnerWrapper>

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
      {fotoData && <Faq data={fotoData[0].faq_questions} />}
    </div>
  );
};

export default Foto;
