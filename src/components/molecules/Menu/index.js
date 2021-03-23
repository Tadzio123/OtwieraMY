/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CircleButton from 'components/atoms/CircleButton';
import Icon from 'components/atoms/Icon';

const StyledMenu = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	z-index: 99;
	margin-right: 2.5rem;
`;

const StyledCircleButton = styled(CircleButton)`
	margin-bottom: 3rem;
`;

const UserDefaultMenu = ({ buttonGpsClick }) => (
	<>
		<StyledCircleButton
			id='button-gps'
			buttonSize='md'
			onClick={buttonGpsClick}
		>
			<Icon name='gps' color='grey' width='2.5rem' height='2.5rem' cursorType="pointer" />
		</StyledCircleButton>
	</>
);

const UserPinSelectedMenu = ({ buttonGpsClick, buttonCancelClick }) => (
	<>
		<StyledCircleButton
			id='button-cancel'
			buttonSize='md'
			onClick={buttonCancelClick}
		>
			<Icon name='cancel' color='grey' width='2.5rem' height='2.5rem' cursorType="pointer" />
		</StyledCircleButton>
		<StyledCircleButton
			id='button-gps'
			buttonSize='md'
			onClick={buttonGpsClick}
		>
			<Icon name='gps' color='grey' width='2.5rem' height='2.5rem' cursorType="pointer" />
		</StyledCircleButton>
	</>
);

const AdminDefaultMenu = ({ buttonPinClick, buttonExitClick }) => (
	<>
		<StyledCircleButton
			id='button-pin'
			buttonSize='md'
			onClick={buttonPinClick}
		>
			<Icon name='pin' color='grey' width='2.5rem' height='2.5rem' cursorType="pointer" />
		</StyledCircleButton>
		<StyledCircleButton
			id='button-exit'
			buttonSize='md'
			onClick={buttonExitClick}
		>
			<Icon name='exit' color='grey' width='2.5rem' height='2.5rem' cursorType="pointer" />
		</StyledCircleButton>
	</>
);

const AdminPinSelectedMenu = ({
	buttonCancelClick,
	buttonEditClick,
	buttonDeleteClick,
	buttonExitClick,
}) => (
	<>
		<StyledCircleButton
			id='button-cancel'
			buttonSize='md'
			onClick={buttonCancelClick}
		>
			<Icon name='cancel' color='grey' width='2.5rem' height='2.5rem' cursorType="pointer" />
		</StyledCircleButton>
		<StyledCircleButton
			id='button-edit'
			buttonSize='md'
			onClick={buttonEditClick}
		>
			<Icon name='edit' color='grey' width='2.5rem' height='2.5rem' cursorType="pointer" />
		</StyledCircleButton>
		<StyledCircleButton
			id='button-delete'
			buttonSize='md'
			onClick={buttonDeleteClick}
		>
			<Icon name='delete' color='grey' width='2.5rem' height='2.5rem' cursorType="pointer" />
		</StyledCircleButton>
		<StyledCircleButton
			id='button-exit'
			buttonSize='md'
			onClick={buttonExitClick}
		>
			<Icon name='exit' color='grey' width='2.5rem' height='2.5rem' cursorType="pointer" />
		</StyledCircleButton>
	</>
);

const handleMenuType = (
	type,
	buttonGpsClick,
	buttonCancelClick,
	buttonPinClick,
	buttonDeleteClick,
	buttonExitClick,
	buttonEditClick
) => {
	if (type === 'UserDefault') {
		return (
			<UserDefaultMenu
				buttonGpsClick={buttonGpsClick}
			/>
		);
	}
	if (type === 'UserSelected') {
		return (
			<UserPinSelectedMenu
				buttonGpsClick={buttonGpsClick}
				buttonCancelClick={buttonCancelClick}
			/>
		);
	}
	if (type === 'AdminDefault') {
		return (
			<AdminDefaultMenu
				buttonPinClick={buttonPinClick}
				buttonExitClick={buttonExitClick}
			/>
		);
	}
	if (type === 'AdminSelected') {
		return (
			<AdminPinSelectedMenu
				buttonCancelClick={buttonCancelClick}
				buttonEditClick={buttonEditClick}
				buttonDeleteClick={buttonDeleteClick}
				buttonExitClick={buttonEditClick}
			/>
		);
	}
	return <UserDefaultMenu />;
};

const Menu = ({
	type,
	buttonGpsClick,
	buttonCancelClick,
	buttonPinClick,
	buttonDeleteClick,
	buttonExitClick,
	buttonEditClick,
}) => (
	<StyledMenu>
		{handleMenuType(
			type,
			buttonGpsClick,
			buttonCancelClick,
			buttonPinClick,
			buttonDeleteClick,
			buttonExitClick,
			buttonEditClick
		)}
	</StyledMenu>
);

Menu.propTypes = {
	type: PropTypes.oneOf([
		'UserDefault',
		'AdminDefault',
		'UserSelected',
		'AdminSelected',
	]),
};
Menu.defaultProps = {
	type: 'UserDefault',
};

export default Menu;
