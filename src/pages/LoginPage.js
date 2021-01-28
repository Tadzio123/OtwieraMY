import React from 'react';
import styled from 'styled-components';
import Logo from 'components/atoms/Logo';
import {
  Formik, Field, Form,
} from 'formik';
import * as Yup from 'yup';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import { Link } from 'react-router-dom';
import handleTextType from 'utils/handleTextType';
import routes from 'utils/routes';

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  
  background: ${({ theme }) => theme.colorBlack};
  opacity: 0.2;
  
  position: relative;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  height: 33.8rem;
  width: 33.4rem;
  padding: 0 2rem;
  
  position: absolute;
  z-index: 100;
  top: calc(50% - 16.9rem);
  left: calc(50% - 16.7rem);
  
  background-color: ${({ theme }) => theme.colorWhite};
  border-radius: 1rem;
  text-align: center;
`;

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2.7rem;
  margin-bottom: 2.1rem;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 12rem;
  margin-bottom: 2.7rem;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1.9rem;
`;

const StyledLink = styled(Link)`
  ${() => handleTextType('font-sm-light-underline')};
  color: ${({ theme }) => theme.colorGray40};
  
  &:hover{
    cursor: pointer;
  }
`;

const initialValues = {
  user: '',
  password: '',
};

const validationSchema = Yup.object({
  user: Yup.string().required(),
  password: Yup.string().required(),
});

const onSubmit = () => {

};

const LoginPage = () => (
  <>
    <Overlay />

    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      {/* eslint-disable-next-line max-len */}
      <Formik initialValues={initialValues} onSubmit={onSubmit} validateOnChange validationSchema={validationSchema}>
        {({ errors, touched, isValid }) => (
          <Form>
            <InputsContainer>
              <Field
                type="text"
                name="user"
                placeholder="Login"
                error={errors.user && touched.user}
                as={Input}
              />
              <Field
                type="password"
                name="password"
                placeholder="Hasło"
                error={errors.password && touched.password}
                as={Input}
              />
            </InputsContainer>
            <ButtonContainer>
              <Button buttonSize="md" buttonType="primary" type="submit" disabled={!isValid}>Zaloguj się</Button>
            </ButtonContainer>
          </Form>
        )}
      </Formik>
      <StyledLink to={routes.home}>Przejdź do widoku użytkownika</StyledLink>
    </Container>
  </>
);

export default LoginPage;
