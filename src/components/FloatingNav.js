import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const NavWrapper = styled.section`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 100px;

  a {
    text-decoration: none;
    font-family: var(--font-secondary);
    font-size: 30px;
    font-weight: 400;
    z-index: 30;
  }

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 968px) {
    padding: 50px 20px;
    flex-direction: column;
    justify-content: center;

    a {
      font-size: 36px;
      padding: 10px 0;
    }
  }

  @media (max-width: 568px) {
    flex-direction: column;

    a {
      padding: 10px 0;
    }
  }
`;

const FloatingNav = () => {
  return (
    <NavWrapper>
      <Link className="logo-nav" to="/foto">
        Foto
      </Link>
      <Link className="logo-nav" to="/flora">
        Flora
      </Link>
      <Link className="logo-nav" to="/samarbeten">
        Samarbeten
      </Link>
      <Link className="logo-nav" to="/priser">
        Priser
      </Link>
      <Link className="logo-nav" to="/kontakt">
        Kontakt
      </Link>
    </NavWrapper>
  );
};

export default FloatingNav;
