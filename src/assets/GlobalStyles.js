import styled from 'styled-components/macro';

export const FullWidthSection = styled.div`
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: var(--fw-padding-xy);
  flex-direction: row;
  position: relative;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: var(--fw-padding-xy-mobile);
  }
`;

export const IntroText = styled.p`
  width: 100%;
  font-size: 24px;
  line-height: 1.4;

  @media (min-width: 800px) {
    width: 70%;
  }
`;

export const ListBlock2Col = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 14px;
  line-height: 1.4;

  & > div {
    width: 100%;
  }

  ul {
    margin: 20px 0;

    li {
      padding: 3px 0;
    }
  }

  h3 {
    margin: 10px 0 30px;
  }

  .tech-info {
    line-height: 1.7;
  }

  @media (min-width: 800px) {
    & > div {
      width: calc(50% - 10px);
    }

    ul {
      margin: 10px 0 50px;
    }
  }
`;

export const WhiteBox = styled.div`
  background: var(--color-white);
  padding: 25px 50px 35px;
  box-shadow: 10px 10px ${(props) => props.mainColor};
  transition: all 0.2s ease-in-out;
  height: fit-content;

  &:hover {
    box-shadow: 0px 0px ${(props) => props.mainColor};
    transform: translate(10px);
  }

  @media (max-width: 1024px) {
    padding: 25px 70px 35px 40px;
    width: fit-content !important;
  }
`;

export const FWSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: var(--fw-padding-xy);
  padding-top: 250px;
  padding-bottom: 100px;

  @media (max-width: 1024px) {
    padding: var(--fw-padding-xy-mobile);
  }

  @media (max-width: 700px) {
    padding: 190px 30px 30px;
  }
`;

export const InfoBoxesWrapper = styled.div`
  display: flex;
  margin-bottom: 70px;

  ul {
    list-style-type: none;
  }

  li {
    position: relative;
    left: 22px;
    margin: 5px 0;
  }

  li:before {
    position: absolute;
    font: var(--fa-font-solid);
    content: '\f061';
    top: 4px;
    left: -22px;
  }

  .top-text {
    width: 60%;
    padding: 20px 40px 0 80px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;

    .top-text {
      width: 96%;
      padding: 40px 40px 0 0;
    }
  }

  @media (max-width: 700px) {
    .top-text {
      width: 100%;
      padding: 40px 0 0 0;
    }
  }
`;

export const Intro = styled.p`
  width: 70%;
  font-family: var(--font-secondary);
  font-size: 20px;
  line-height: 1.4;
  color: ${(props) => props.mainColor};
  margin: 50px 0;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 700px) {
    width: 100%;
    margin: 30px 0;
  }
`;

export const ContentWrapper = styled.div`
  width: 76%;

  h1 {
    font-size: 56px;
  }

  h2 {
    font-size: 12px;
    text-transform: uppercase;
    margin: 10px 0;
    letter-spacing: 1.6px;
  }

  @media (max-width: 700px) {
    width: 100% !important;

    h1 {
      font-size: 42px;
    }
  }

  @media (max-width: 1400px) {
    width: 72%;

    h1 {
      font-size: 42px;
    }
  }
`;

export const SectionImage = styled.img`
  width: 100%;
  margin-top: ${(props) => props.marginTop};
`;

export const LogoSection = styled.div`
  padding: 0 0 40px 0;
  max-width: 900px;

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 0 40px;
  }
  img {
    width: 20%;
    height: auto;
    max-height: 100px;
    object-fit: contain;
    max-width: 100%;
    padding: 20px 0;
  }
`;
