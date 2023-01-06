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

const Samarbeten = () => {
  return (
    <div>
      <FloatingNav />
      <h1 style={{ fontFamily: 'var(--font-secondary)', textAlign: 'center' }}>
        Samarbeten
      </h1>
    </div>
  );
};

export default Samarbeten;
