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

export const FullWidthBackgroundImage = styled(FullWidthSection)`
  background: url(${(props) => props.imageURL});
  background-size: cover;
  background-position: center;
`;

export const Hero = styled(FullWidthBackgroundImage)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo {
    width: 60%;
    padding: 30px;

    @media (max-width: 1200px) {
      width: 80%;
      padding: 30px 10px;
    }

    @media (max-width: 768px) {
      width: 90%;
      padding: 30px 10px;
    }
  }

  .slogan {
    width: 40%;

    @media (max-width: 1200px) {
      width: 60%;
    }

    @media (max-width: 768px) {
      width: 70%;
    }
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
