import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const NavWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 30px 30px 50px 30px;
  position: fixed;
  z-index: 10;

  a {
    text-decoration: none;
  }

  img {
    width: 40px;
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <Link className="logo-nav" to="/">
        <img alt="Nav icon" src="./images/nav-button.svg" />
      </Link>
    </NavWrapper>
  );
};

export default Nav;
