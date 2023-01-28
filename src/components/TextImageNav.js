import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { OuterWrapper, MainButton } from '../assets/GlobalStyles';

const CustomOuterWrapper = styled(OuterWrapper)`
  background: ${(props) => props.bg};
  display: flex;
  height: 600px;
  max-height: 600px;
  overflow: hidden;
  flex-direction: ${(props) => (props.dir === 'rev' ? 'row-reverse' : 'row')};

  div {
    padding: 50px;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  img {
    width: 50%;
    height: 100%;
    object-fit: cover;
  }

  h3 {
    font-family: var(--font-secondary);
    font-weight: 400;
    font-size: 60px;
  }
`;

const Title = styled.h3`
  color: ${(props) => props.color};
`;

const MainText = styled.p`
  width: 60%;
  color: ${(props) => props.color};
  padding: 20px 0;
`;

const TextImageNav = ({
  bg,
  color,
  title,
  text,
  buttonText,
  toLocation,
  dir,
  imgUrl,
  imgAlt,
}) => {
  return (
    <CustomOuterWrapper bg={bg} dir={dir}>
      <img src={imgUrl} alt={imgAlt} />
      <div>
        <Title color={color}>{title}</Title>
        <MainText color={color}>{text}</MainText>
        <Link to={toLocation}>
          <MainButton>{buttonText}</MainButton>
        </Link>
      </div>
    </CustomOuterWrapper>
  );
};

export default TextImageNav;
