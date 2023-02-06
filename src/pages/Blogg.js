import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Hero, InnerWrapper } from '../assets/GlobalStyles';
import FloatingNav from '../components/FloatingNav';
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

const Blogg = () => {
  const [blogData, setBlogData] = useState();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'post']{
                    _id,
                    "mainImage":mainImage.asset->{url, tags, title},
                    "mainText":body[].children,
                    
                  publishedAt,
                  title
                  }`
      )
      .then((data) => console.log(data))
      .catch(console.error);
  }, []);

  return (
    <OuterWrapper>
      <CustomHero imageURL="./images/326739964_195192789757743_5301976599399459507_n.jpeg">
        <h1>Blogg</h1>
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

export default Blogg;
