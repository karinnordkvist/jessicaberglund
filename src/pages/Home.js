import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components/macro';
import { Hero } from '../assets/GlobalStyles';
import FloatingNav from '../components/FloatingNav';
import TextImage from '../components/TextImage';
import DualPhotoLinks from '../components/DualPhotoLinks';

// import sanityClient from '../client.js';

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
      <Link to="/flora">
        <Hero imageURL="./images/311769422_1285362212227630_191711011740689787_n.jpeg">
          <h2>Flora</h2>
        </Hero>
      </Link>
    </div>
  );
};

export default Home;
