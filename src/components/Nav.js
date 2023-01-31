import React, { useRef, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { now } from '../reducers/now';

const NavWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 30px 30px 50px 30px;
  position: fixed;
  z-index: 20;

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

  button {
    background: none;
    border: none;
    box-shadow: none;
    cursor: pointer;
  }
`;

const NavFoldout = styled.div`
  padding: 40px;
  background: #fff;
  position: absolute;
  top: 80px;
  display: flex;
  flex-direction: column;
  font-family: var(--font-secondary);
  font-weight: 400;
  font-size: 30px;
  line-height: 2;
  text-align: center;
  z-index: 19;
  transition: opacity 0.5s ease;

  a {
    font-weight: 400;
  }
`;

const Nav = () => {
  const dispatch = useDispatch();

  const homeNavRef = useRef();
  const homeFoldoutRef = useRef();
  const menuState = useSelector((store) => store.now.menuOpen);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 50 && window.location !== '/') {
        homeNavRef.current.style.opacity = '1';
      } else {
        homeNavRef.current.style.opacity = '0';
      }
    });
  }, []);

  useEffect(() => {
    if (menuState) {
      homeFoldoutRef.current.style.opacity = '1';
      homeFoldoutRef.current.style.top = '80px';
    } else {
      homeFoldoutRef.current.style.opacity = '0';
      homeFoldoutRef.current.style.top = '-580px';
    }
  }, [menuState]);

  return (
    <NavWrapper>
      <Link to="/">
        <img
          className="logo"
          alt="Logo"
          src="./images/jessica-berglund-logo.svg"
          ref={homeNavRef}
        />
      </Link>
      <button
        className="logo-nav"
        onClick={() => dispatch(now.actions.setMenuOpen())}
      >
        <img
          className="hamburger"
          alt="Nav icon"
          src="./images/nav-button.svg"
        />
      </button>

      <NavFoldout ref={homeFoldoutRef}>
        <Link to="/" onClick={() => dispatch(now.actions.setMenuOpen(false))}>
          Hem
        </Link>
        <Link
          to="/foto"
          onClick={() => dispatch(now.actions.setMenuOpen(false))}
        >
          Foto
        </Link>
        <Link
          to="/flora"
          onClick={() => dispatch(now.actions.setMenuOpen(false))}
        >
          Flora
        </Link>
        <Link
          to="/samarbeten"
          onClick={() => dispatch(now.actions.setMenuOpen(false))}
        >
          Samarbeten
        </Link>
        <Link
          to="/priser"
          onClick={() => dispatch(now.actions.setMenuOpen(false))}
        >
          Priser
        </Link>
        <Link
          to="/kontakt"
          onClick={() => dispatch(now.actions.setMenuOpen(false))}
        >
          Kontakt
        </Link>
      </NavFoldout>
    </NavWrapper>
  );
};

export default Nav;
