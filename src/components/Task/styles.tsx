import styled from 'styled-components';

import { StylesConstants } from '../../constants/stylesConstants';

export interface TaskTextProps {
  checked: boolean;
}

export const TaskContainer = styled.div`
  display: grid;
  grid-template-columns: ${StylesConstants.NormalHeight} auto ${StylesConstants.NormalHeight};
  margin: ${StylesConstants.SmallMargin} 0;
`;

export const TaskText = styled.div<TaskTextProps>`
  font-weight: 500;
  margin-left: ${StylesConstants.SmallMargin};
  ${(props) => (props.checked ? null : 'text-decoration: line-through;')}
`;
