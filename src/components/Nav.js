import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const NavWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  /* padding: 35px 30px 50px 30px; */
  position: absolute;
  z-index: 10;

  a {
    text-decoration: none;
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <Link className="logo-nav" to="/">
        <img
          alt="Logo"
          style={{
            filter: 'invert(1)',
            width: '80%',
            position: 'absolute',
            top: '20px',
            left: '0',
            right: '0',
          }}
          src="./images/Jessica-Berglund-logo.svg"
        />
      </Link>

      <img alt="Nav icon" src="./images/nav-button.svg" />
    </NavWrapper>
  );
};

export default Nav;
