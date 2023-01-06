import styled from 'styled-components/macro';

export const OuterWrapper = styled.section`
  width: 100%;
`;

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

  h2 {
    font-family: var(--font-secondary);
    color: var(--color-neutral);
    font-size: 150px;
    font-weight: 400;
  }
`;

export const MainButton = styled.a`
  text-decoration: none;
  font-family: var(--font-primary);
  font-weight: 400;
  background: var(--color-darkHazel);
  color: var(--color-neutral);
  padding: 18px 40px;
  cursor: pointer;
  display: inline-block;
  margin: 20px 0;
`;
