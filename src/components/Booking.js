import React from 'react';
import styled from 'styled-components/macro';
import { FullWidthSection, InnerWrapper } from '../assets/GlobalStyles';

const BookingWrapper = styled(FullWidthSection)`
  background: var(--color-lightHazel);
  width: 100vw;
  position: relative;
  left: 0;
  min-height: 100%;

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CustomInnerWrapper = styled(InnerWrapper)`
  max-width: 900px;
  width: 80%;
  margin: 100px auto;
  min-height: auto;
  display: flex;
  align-items: flex-start;
  /* justify-content: center; */

  div {
    width: 50%;
    margin-right: 40px;
  }

  p {
    padding: 20px 0;
    font-size: 18px;
    line-height: 1.3;
  }

  h3 {
    font-family: var(--font-primary);
    font-size: 42px;
  }

  form {
    min-width: 400px;
    padding: 50px 50px 30px;
    background: #fff;
    display: flex;
    flex-direction: column;

    input:not(input[type='submit']) {
      border: none;
      border-bottom: 1px solid #000;
      margin: 10px 0 20px;
      font-size: 16px;
      line-height: 1.8;
      font-family: var(--font-primary);
    }

    input[type='submit'] {
      border: none;
      text-decoration: none;
      font-family: var(--font-primary);
      font-weight: 400;
      background: var(--color-lightHazel);
      padding: 18px 40px;
      cursor: pointer;
      display: inline-block;
      margin: 20px 0;

      &:hover {
        background: var(--color-hazel);
        color: #fff;
      }
    }

    textarea {
      border: none;
      border-bottom: 1px solid #000;
      min-height: 100px;
    }

    label {
      display: flex;
      flex-direction: column;
      font-style: italic;
    }

    .checkbox-wrapper {
      border: none;
      margin-top: 30px;

      legend {
        font-style: italic;
        margin: 10px 0;
      }

      div {
        display: flex;
        align-items: center;
      }

      input[type='checkbox'] {
        margin: 10px 10px 10px 0;
      }
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;

    div {
      width: 100%;
      margin-bottom: 30px;
    }

    form {
      width: 100%;

      div {
        margin: 0;
      }
    }
  }
`;

const Booking = () => {
  return (
    <BookingWrapper>
      <CustomInnerWrapper>
        <div>
          <h3>Är jag er fotograf?</h3>
          <p>
            Om ja, då är jag så himla pepp att få en förfrågan av er. Fyll i
            formuläret så återkopplar jag till er så fort jag kan. Inte en
            sekund för sent att föreviga minnen på er fina familj.
          </p>
        </div>
        <form>
          <label for="name">
            Namn
            <input id="name" name="name" type="text" />
          </label>
          <label for="email">
            Mailadress
            <input id="email" name="email" type="text" />
          </label>
          <label for="message">
            Meddelande
            <textarea id="message" name="message"></textarea>
          </label>
          <fieldset className="checkbox-wrapper">
            <legend>Vilken typ av fotografering är ni intresserade av?</legend>
            <div>
              <input type="checkbox" id="familj" name="type" value="familj" />
              <label for="familj">Familj</label>
            </div>
            <div>
              <input type="checkbox" id="barn" name="type" value="barn" />
              <label for="barn">Barn</label>
            </div>
            <div>
              <input type="checkbox" id="brollop" name="type" value="brollop" />
              <label for="brollop">Bröllop</label>
            </div>
            <div>
              <input type="checkbox" id="gravid" name="type" value="gravid" />
              <label for="gravid">Gravid</label>
            </div>
            <div>
              <input type="checkbox" id="nyfödd" name="type" value="nyfödd" />
              <label for="nyfödd">Nyfödd</label>
            </div>
          </fieldset>

          <input type="submit" className="submit-btn" />
        </form>
      </CustomInnerWrapper>
    </BookingWrapper>
  );
};

export default Booking;
