import styled from 'styled-components';

import { StylesConstants } from '../../constants/stylesConstants';

export interface StyledButtonProps {
  withGap: boolean;
  withMargin: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: grid;
  place-items: center;
  grid-gap: ${(props) => (props.withGap ? StylesConstants.GridGapSmall : 0)};
  ${(props) => (props.withGap ? 'grid-template-columns: auto 20px;' : '')}
  border-radius: ${StylesConstants.BorderRadius};
  padding: 5px 10px;
  font-size: large;
  height: ${StylesConstants.NormalHeight};
  min-width: ${StylesConstants.NormalHeight};
  margin-right: ${(props) =>
    props.withMargin ? StylesConstants.SmallMargin : 0};
`;
