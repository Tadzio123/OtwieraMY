/* eslint-disable */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import handleTextType from 'utils/handleTextType';
import Button from 'components/atoms/Button';
import routes from 'utils/routes';
import HotDogIcon from 'assets/icons/hotDogIcon.svg';

const StyledContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Styled404 = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 25rem;
	color: #1976d2;
`;

const StyledHeader = styled.h1`
	font-size: 2.5rem;
	font-weight: 400;
	margin: 0 0 4.2rem 0;
`;

const StyledLink = styled(Link)`
	${() => handleTextType('font-sm-light-underline')};
	color: ${({ theme }) => theme.colorGray40};

	&:hover {
		cursor: pointer;
	}
	button {
		width: 100% !important;
	}
`;

const NotFound = () => (
	<StyledContainer>
		<Styled404>
			4 <img src={HotDogIcon}></img> 4
		</Styled404>
		<StyledHeader>Coś pożarło tę stronę.</StyledHeader>
		<StyledLink to={routes.home}>
			<Button buttonSize="md">Wstecz</Button>
		</StyledLink>
	</StyledContainer>
);

export default withRouter(NotFound);
