import React from 'react';
import styled from 'styled-components/macro';
import { OuterWrapper, MainButton } from '../assets/GlobalStyles';

const CustomOuterWrapper = styled(OuterWrapper)`
  background: ${(props) => props.bg};
  display: flex;
  height: 600px;
  max-height: 600px;
  overflow: hidden;

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

const TextImageNav = ({ bg, color }) => {
  return (
    <CustomOuterWrapper bg={bg}>
      <img
        src="./images/311314965_1153875888877486_5513361764347484917_n.jpeg"
        alt="Jessica stickar vid ett träd"
      />
      <div>
        <Title color={color}>Priser</Title>
        <MainText color={color}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum
          consectetur ultrices turpis lectus. Amet commodo
        </MainText>
        <MainButton>Till Prislistan</MainButton>
      </div>
    </CustomOuterWrapper>
  );
};

export default TextImageNav;
