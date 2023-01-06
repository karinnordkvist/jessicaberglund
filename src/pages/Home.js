import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { FullWidthBackgroundImage, Hero } from '../assets/GlobalStyles';
import FloatingNav from '../components/FloatingNav';
import TextImage from '../components/TextImage';
import DualPhotoLinks from '../components/DualPhotoLinks';

// import sanityClient from '../client.js';

// COMPONENTS
// import Hero from '../components/Hero';
// import FullWidthImage from '../components/FullWidthImage';
// import News from '../components/News';
// import Calendar from '../components/Calendar';
// import Divider from '../components/Divider';
// import MoreButton from '../components/MoreButton';
// import Contact from '../components/Contact';
// import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero imageURL="./images/314379697_2072911416246862_8553839296102421913_n.jpeg">
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
      <TextImage />
      <DualPhotoLinks />
    </div>
  );
};

export default Home;
