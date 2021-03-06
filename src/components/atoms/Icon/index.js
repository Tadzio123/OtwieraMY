import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// Icon imports are sorted alphabetically
import { ReactComponent as ArrowDownIcon } from 'assets/icons/arrowDown.svg';
import { ReactComponent as ArrowUpIcon } from 'assets/icons/arrowUp.svg';
import { ReactComponent as CancelIcon } from 'assets/icons/cancel.svg';
import { ReactComponent as ChatIcon } from 'assets/icons/chat.svg';
import { ReactComponent as UnionIcon } from 'assets/icons/close.svg';
import { ReactComponent as ConfirmIcon } from 'assets/icons/confirm.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg';
import { ReactComponent as PencilIcon } from 'assets/icons/edit.svg';
import { ReactComponent as ExitIcon } from 'assets/icons/exit.svg';
import { ReactComponent as Exit2Icon } from 'assets/icons/exit_2.svg';
import { ReactComponent as GarbageIcon } from 'assets/icons/garbage.svg';
import { ReactComponent as GPSIcon } from 'assets/icons/gps.svg';
import { ReactComponent as NoIcon } from 'assets/icons/no.svg';
import { ReactComponent as MarkerPrimaryIcon } from 'assets/icons/marker-primary.svg';
import { ReactComponent as MarkerPrimaryActiveIcon } from 'assets/icons/marker-primary-active.svg';
import { ReactComponent as PinIcon } from 'assets/icons/pin.svg';
import { ReactComponent as SettingsIcon } from 'assets/icons/settings.svg';
import { ReactComponent as YesIcon } from 'assets/icons/yes.svg';

const handleIconType = (name) => {
  switch (name) {
    case 'arrowDown':
      return <ArrowDownIcon />;
    case 'arrowUp':
      return <ArrowUpIcon />;
    case 'cancel':
      return <CancelIcon />;
    case 'chat':
      return <ChatIcon />;
    case 'union':
      return <UnionIcon />;
    case 'confirm':
      return <ConfirmIcon />;
    case 'delete':
      return <DeleteIcon />;
    case 'pencil':
      return <PencilIcon />;
    case 'exit':
      return <ExitIcon />;
    case 'exit2':
      return <Exit2Icon />;
    case 'garbage':
      return <GarbageIcon />;
    case 'gps':
      return <GPSIcon />;
    case 'no':
      return <NoIcon />;
    case 'markerPrimary':
      return <MarkerPrimaryIcon />;
    case 'markerPrimaryActive':
      return <MarkerPrimaryActiveIcon />;
    case 'pin':
      return <PinIcon />;
    case 'settings':
      return <SettingsIcon />;
    case 'yes':
      return <YesIcon />;
    default:
      return <PencilIcon />;
  }
};

const StyledIcon = styled.div`
  display: inline-flex;
  align-items:center;

  svg {
    height: ${({ height }) => height};
    width: ${({ width }) => width};
    transition: .2s;
  }
  svg path {
    fill: ${({ color }) => color};
  }
`;

const Icon = ({
  name, color, width, height,
}) => (
  <>
    <StyledIcon color={color} width={width} height={height}>
      {handleIconType(name)}
    </StyledIcon>
  </>
);

Icon.propTypes = {
  name: PropTypes.oneOf(['arrowDown', 'arrowUp', 'cancel', 'chat', 'union', 'confirm', 'delete', 'pencil', 'exit', 'exit2', 'garbage', 'gps', 'no', 'markerPrimary', 'markerPrimaryActive', 'pin', 'settings', 'yes']),
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func,
  ]),
  width: PropTypes.string,
  height: PropTypes.string,
};

Icon.defaultProps = {
  name: 'union',
  color: ({ theme }) => theme.colorBlack,
  width: '2rem',
  height: '2rem',
};

export default Icon;
