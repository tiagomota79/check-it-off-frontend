import styled from 'styled-components';

import { StylesConstants } from '../../constants/stylesConstants';

export const AddListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
`;

export const Label = styled.label`
  font-size: large;
  margin-right: ${StylesConstants.SmallMargin};
`;

export const Input = styled.input`
  border-radius: ${StylesConstants.BorderRadius};
  height: ${StylesConstants.NormalHeight};
  font-size: smaller;
  margin-right: ${StylesConstants.SmallMargin};
`;
