import styled from 'styled-components';

import { StylesConstants } from '../../constants/stylesConstants';

export interface StyledButtonProps {
  withGap: boolean;
  withMargin: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: grid;
  place-items: center;
  grid-gap: ${({ withGap }) => (withGap ? StylesConstants.GridGapSmall : 0)};
  ${({ withGap }) => (withGap ? 'grid-template-columns: auto 20px;' : '')}
  border-radius: ${StylesConstants.BorderRadius};
  padding: 5px 10px;
  font-size: large;
  font-family: MontserratSemiBold;
  height: ${StylesConstants.NormalHeight};
  min-width: ${StylesConstants.NormalHeight};
  margin-right: ${({ withMargin }) =>
    withMargin ? StylesConstants.SmallMargin : 0};
`;
