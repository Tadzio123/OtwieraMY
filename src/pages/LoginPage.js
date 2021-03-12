import React, { useEffect } from 'react';
import styled from 'styled-components';
import Logo from 'components/atoms/Logo';
import {
  Formik, Field, Form,
} from 'formik';
import * as Yup from 'yup';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import { Link, withRouter } from 'react-router-dom';
import handleTextType from 'utils/handleTextType';
import authService from 'services/account.service';
import routes from 'utils/routes';
import history from 'utils/history';
import { useAlert } from 'react-alert';

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
  z-index: 49;
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
  user: 'root',
  password: 'password123',
};

const validationSchema = Yup.object({
  user: Yup.string().required(),
  password: Yup.string().required(),
});

const LoginPage = () => {
  const alert = useAlert();

  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      history.push(routes.home);
      window.location.reload(true);
    }
  }, []);

  const onSubmit = (values) => {
    authService.login(values.user, values.password)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem('authToken', res.headers.get('Authorization'));
          alert.success('Zostałeś zalogowany');
          history.push(routes.home);
          window.location.reload(true);
        } if (res.status === 500 || res.status === 401) {
          alert.error('Nieprawidłowe dane logowania');
        }
      })
      .catch(() => {
        alert.error('Coś poszło nie tak');
      });
  };

  return (
    <>
      <Overlay />

      <Container>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validateOnChange validationSchema={validationSchema}>
          {({ errors, touched, isValid }) => (
            <Form>
              <InputsContainer>
                <Field
                  id="login"
                  type="text"
                  name="user"
                  placeholder="Login"
                  error={errors.user && touched.user}
                  as={Input}
                />
                <Field
                  id="password"
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
};

export default withRouter(LoginPage);
