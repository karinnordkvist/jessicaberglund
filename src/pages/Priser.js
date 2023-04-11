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
import sanityClient from '../client.js';
import { PortableText } from '@portabletext/react';

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
  max-width: 900px;
  padding: 50px 0;

  .intro-wrapper {
    p {
      padding: 5px 0;
    }
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
  /* flex-direction: column; */
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

  .price-wrapper {
    width: 40%;
    padding: 20px;
    margin-left: 20px;

    .price {
      font-style: italic;
    }
  }

  p {
    padding: 5px 0;
  }
`;

const Priser = () => {
  const [priceData, setPriceData] = useState();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'prices']{
                    _id,
                    s1_text,
                    foto_prices,
                    flora_prices,
                  }`
      )
      .then((data) => setPriceData(data))
      .catch(console.error);
  }, []);

  priceData && console.log(priceData);

  return (
    <OuterWrapper>
      <CustomHero imageURL="./images/309145436_780120409914218_7432944178326966936_n.jpeg">
        <h1>Prislista</h1>
      </CustomHero>
      <CustomInnerWrapper style={{ maxWidth: '600px', padding: '50px 0 20px' }}>
        <div className="intro-wrapper">
          {priceData && <PortableText value={priceData[0].s1_text} />}
        </div>
      </CustomInnerWrapper>
      <CustomInnerWrapper>
        {priceData &&
          priceData[0].foto_prices.map((item, index) => {
            return (
              <Item key={index}>
                <div className="text-wrapper">
                  <h3>{item.priceTitle}</h3>
                  <PortableText value={item.priceText} />
                </div>
                <div className="price-wrapper">
                  {item.pricePrice &&
                    item.pricePrice.map((item2, index2) => {
                      return (
                        <p className="price" key={index2}>
                          {item2}
                        </p>
                      );
                    })}
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
        buttonTextColor="var(--color-darkDijon)"
        toLocation="/foto"
        bg="var(--color-darkDijon)"
        color="var(--color-neutral)"
        dir=""
        imgUrl="./images/313849679_573762377749840_447649959734290178_n.jpeg"
        imgAlt="Barnen leker i en lövhög"
      />
      <FloatingNav />
    </OuterWrapper>
  );
};

export default Priser;
