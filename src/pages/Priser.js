import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { FullWidthBackgroundImage, Hero } from '../assets/GlobalStyles';
import FloatingNav from '../components/FloatingNav';
import TextImage from '../components/TextImage';
import DualPhotoLinks from '../components/DualPhotoLinks';

// import sanityClient from '../client.js';

const Priser = () => {
  return (
    <div>
      <FloatingNav />
      <h1 style={{ fontFamily: 'var(--font-secondary)', textAlign: 'center' }}>
        Priser
      </h1>
    </div>
  );
};

export default Priser;
