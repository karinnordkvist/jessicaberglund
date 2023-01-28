import React, { useRef, useEffect } from 'react';
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

  .hamburger {
    width: 40px;
  }

  .logo {
    position: absolute;
    top: 30px;
    width: 200px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: all 0.5s ease;
  }
`;

const Nav = () => {
  const homeNavRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 50) {
        homeNavRef.current.style.opacity = '1';
      } else {
        homeNavRef.current.style.opacity = '0';
      }
    });
  }, []);

  return (
    <NavWrapper>
      <Link>
        <img
          className="logo"
          alt="Logo"
          src="./images/jessica-berglund-logo.svg"
          ref={homeNavRef}
        />
      </Link>
      <Link className="logo-nav" to="/">
        <img
          className="hamburger"
          alt="Nav icon"
          src="./images/nav-button.svg"
        />
      </Link>
    </NavWrapper>
  );
};

export default Nav;
