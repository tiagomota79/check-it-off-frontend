import styled from 'styled-components';

import { StylesConstants } from '../../constants/stylesConstants';

export const ToDoListsContainer = styled.div`
  width: 90%;
  height: 95%;
`;

export const ListContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.listBackground};
  padding: ${StylesConstants.SmallMargin};
  border-radius: ${StylesConstants.BorderRadius};
  margin-bottom: ${StylesConstants.BorderRadius};
`;
