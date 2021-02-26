import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// Importy ikon są posortowane alfabetycznie
import { ReactComponent as ArrowDownIcon } from 'assets/icons/arrowDown.svg';
import { ReactComponent as ArrowUpIcon } from 'assets/icons/arrowUp.svg';
import { ReactComponent as ChatIcon } from 'assets/icons/chat.svg';
import { ReactComponent as UnionIcon } from 'assets/icons/close.svg';
import { ReactComponent as PencilIcon } from 'assets/icons/edit.svg';
import { ReactComponent as ExitIcon } from 'assets/icons/exit.svg';
import { ReactComponent as Exit2Icon } from 'assets/icons/exit_2.svg';
import { ReactComponent as GarbageIcon } from 'assets/icons/garbage.svg';
import { ReactComponent as GPSIcon } from 'assets/icons/gps.svg';
import { ReactComponent as NoIcon } from 'assets/icons/no.svg';
import { ReactComponent as PinIcon } from 'assets/icons/pin.svg';
import { ReactComponent as SettingsIcon } from 'assets/icons/settings.svg';
import { ReactComponent as YesIcon } from 'assets/icons/yes.svg';

const handleIconType = (name) => {
  switch (name) {
    case 'arrowDown':
      return <ArrowDownIcon />;
    case 'arrowUp':
      return <ArrowUpIcon />;
    case 'chat':
      return <ChatIcon />;
    case 'union':
      return <UnionIcon />;
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
  align-self: flex-start;
  margin: 1.5rem 0 0 0;
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
  name: PropTypes.oneOf(['arrowDown', 'arrowUp', 'chat', 'union', 'pencil', 'exit', 'exit2', 'garbage', 'gps', 'no', 'pin', 'settings', 'yes']),
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
