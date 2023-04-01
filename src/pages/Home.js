import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { PortableText } from '@portabletext/react';

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
                    testBody,
                    "hero_img":hero_img.asset->{url, tags, title},
                    s1_text,
                    s1_text_2,
                    "s1_img" : s1_img.asset->{url, tags, title},
                    s2_link1,
                    s2_link2,
                    "s2_img1":s2_img1.asset->{url, tags, title},
                    "s2_img2":s2_img2.asset->{url, tags, title},
                    "s3_img":s3_img.asset->{url, tags, title},
                    s3_link,
                    "s4_img":s4_img.asset->{url, tags, title},
                    s4_title,
                    s4_text,
                    s4_linktext,
                    s4_link,
                  }`
      )
      .then((data) => setHomeData(data))
      .catch(console.error);
  }, []);

  console.log(homeData);

  return (
    homeData && (
      <div>
        {/* <PortableText value={homeData[0].testBody} /> */}
        <Hero imageURL={homeData[0].hero_img.url}>
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
        <TextImage
          introtext={homeData[0].s1_text_2}
          introimg={homeData[0].s1_img.url}
        />
        <DualPhotoLinks
          img1={homeData[0].s2_img1.url}
          link1={homeData[0].s2_link1[0]}
          img2={homeData[0].s2_img2.url}
          link2={homeData[0].s2_link2[0]}
        />
        <FullWidthImage
          text="Flora"
          bg={homeData[0].s3_img.url}
          fontColor="var(--color-neutral)"
          path="/flora"
        />
        <TextImageNav
          title="Priser"
          text=""
          bg="var(--color-hazel)"
          color="var(--color-neutral)"
          toLocation="/priser"
          buttonText="Till Prislistan"
          buttonColor="var(--color-neutral)"
          buttonTextColor="var(--color-hazel)"
          dir="rev"
          imgUrl="./images/308257562_1118799312080230_8966248970938926505_n.jpeg"
        />
        <Form bg="" textColor="" />
      </div>
    )
  );
};

export default Home;
