import styled from 'styled-components';

import { colours } from '../../constants/colours';
import { StylesConstants } from '../../constants/stylesConstants';

export interface IconsToggleProps {
  on: boolean;
}

export const IconsToggleContainer = styled.div<IconsToggleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60px;
  height: 35px;
  border-radius: ${StylesConstants.BorderRadius};
  background-color: ${({ on }) => (on ? colours.white : colours.black)};
  transition: all 0.25s ease-in-out;
  overflow: hidden;

  svg {
    transition: all 0.25s ease-in-out;

    // sun icon
    &:first-child {
      transform: ${({ on }) => (on ? 'translateY(0)' : 'translateY(50px)')};
      color: black;
    }

    // moon icon
    &:nth-child(2) {
      transform: ${({ on }) => (on ? 'translateY(-50px)' : 'translateY(0)')};
      color: white;
    }
  }
`;
