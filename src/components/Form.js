import React from 'react';
import styled from 'styled-components/macro';
import { FullWidthSection, MainButton } from '../assets/GlobalStyles';

const OuterWrapper = styled.div`
  background: var(--color-lightTerra);
`;

const FormWrapper = styled(FullWidthSection)`
  background: var(--color-lightTerra);
  width: 100%;
  max-width: 600px;
  min-height: auto;
  flex-direction: column;
  margin: auto;
  padding: 100px 0;

  p {
    padding: 20px 0;
    line-height: 1.5;
    text-align: center;
    font-size: 20px;
  }

  form {
    width: 60%;
    display: flex;
    flex-direction: column;
    padding: 50px 0;
  }

  input,
  textarea {
    border: none;
    line-height: 1.5;
    font-size: 18px;
    font-family: var(--font-primary);
    padding: 5px;
    margin: 5px 0 20px;
  }

  textarea {
    min-height: 150px;
  }

  .submit-button {
    text-decoration: none;
    font-family: var(--font-primary);
    font-weight: 400;
    background: var(--color-darkTerra);
    color: var(--color-neutral);
    padding: 18px 40px;
    cursor: pointer;
    display: inline-block;
    margin: 20px 0;
  }

  @media (max-width: 768px) {
    padding: 60px 30px;

    form {
      width: 80%;
    }
  }

  @media (max-width: 498px) {
    padding: 60px 30px;

    form {
      width: 100%;
    }
  }
`;

const Form = () => {
  return (
    <OuterWrapper>
      <FormWrapper>
        <h2>Boka mig</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum
          consectetur ultrices turpis lectus. Amet commodo curabitur rutrum pro.
        </p>

        <form>
          <label htmlFor="namn">Namn:</label>
          <input type="text" id="namn" name="namn" />
          <label htmlFor="epost">Epost:</label>
          <input type="email" id="epost" name="epost" />
          <label htmlFor="meddelande">Meddelande:</label>
          <textarea id="meddelande" name="meddelande"></textarea>
          <input
            className="submit-button"
            type="submit"
            id="submit"
            name="submit"
            value="Skicka"
          />
        </form>
      </FormWrapper>
    </OuterWrapper>
  );
};

export default Form;
