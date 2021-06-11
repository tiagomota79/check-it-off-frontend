import styled from 'styled-components';

import { colours } from '../../constants/colours';
import { StylesConstants } from '../../constants/stylesConstants';

export const ToDoListsContainer = styled.div`
  width: 90%;
  height: 95%;
`;

export const ListContainer = styled.div`
  width: 100%;
  background-color: ${colours.offWhite};
  padding: ${StylesConstants.SmallMargin};
  border-radius: ${StylesConstants.BorderRadius};
  margin-bottom: ${StylesConstants.BorderRadius};
`;
