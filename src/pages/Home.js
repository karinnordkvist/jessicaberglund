import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components/macro';
import { Hero } from '../assets/GlobalStyles';
import FloatingNav from '../components/FloatingNav';
import FullWidthImage from '../components/FullWidthImage';
import TextImage from '../components/TextImage';
import DualPhotoLinks from '../components/DualPhotoLinks';
import TextImageNav from '../components/TextImageNav';
import Form from '../components/Form';
import Footer from '../components/Footer';
import sanityClient from '../client.js';

const Home = () => {
  const [homeData, setHomeData] = useState();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'home']{
                    _id,
                    "hero_image":hero_image.asset->{url, tags, title},
                    intro_text,
                    "intro_image":intro_image.asset->{url, tags, title},
                    category_titles,
                    duo_nav_link1,
                    duo_nav_link2,
                    "duo_nav_img1":duo_nav_img1.asset->{url, tags, title},
                    "duo_nav_img2":duo_nav_img2.asset->{url, tags, title},
                  }`
      )
      .then((data) => setHomeData(data))
      .catch(console.error);
  }, []);

  return (
    homeData && (
      <div>
        <Hero imageURL={homeData[0].hero_image.url}>
          <img
            className="logo"
            alt="Logo"
            src="./images/jessica-berglund-logo.svg"
          />
          <img
            className="slogan"
            alt="Slogan"
            src="./images/jessica-berglund-slogan.svg"
          />
        </Hero>
        <FloatingNav />
        <TextImage data={homeData} />
        <DualPhotoLinks data={homeData} />
        <FullWidthImage
          text="Flora"
          bg="./images/311769422_1285362212227630_191711011740689787_n.jpeg"
          fontColor="var(--color-neutral)"
          path="/flora"
          data={homeData}
        />
        <TextImageNav
          title="Priser"
          text=""
          bg="var(--color-darkMoss)"
          color="var(--color-neutral)"
          toLocation="/priser"
          buttonText="Till Prislistan"
          buttonColor="var(--color-neutral)"
          buttonTextColor="var(--color-darkMoss)"
          dir="rev"
          imgUrl="./images/308257562_1118799312080230_8966248970938926505_n.jpeg"
          data={homeData}
        />
        <Form bg="" textColor="" />
      </div>
    )
  );
};

export default Home;
