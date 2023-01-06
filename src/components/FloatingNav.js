import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const NavWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 100px;
  z-index: 10;

  a {
    text-decoration: none;
    font-family: var(--font-secondary);
    font-size: 30px;
    font-weight: 400;
  }

  @media (max-width: 968px) {
    padding: 50px;
  }

  @media (max-width: 768px) {
    a {
      font-size: 24px;
    }
  }

  @media (max-width: 568px) {
    flex-direction: column;

    a {
      padding: 10px 0;
      font-size: 36px;
    }
  }
`;

const FloatingNav = () => {
  return (
    <NavWrapper>
      <Link className="logo-nav" to="/">
        Foto
      </Link>
      <Link className="logo-nav" to="/">
        Flora
      </Link>
      <Link className="logo-nav" to="/">
        Samarbeten
      </Link>
      <Link className="logo-nav" to="/">
        Priser
      </Link>
      <Link className="logo-nav" to="/">
        Kontakt
      </Link>
    </NavWrapper>
  );
};

export default FloatingNav;
