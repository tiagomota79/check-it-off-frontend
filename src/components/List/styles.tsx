import styled from 'styled-components';

import { StylesConstants } from '../../constants/stylesConstants';

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ListTitle = styled.div`
  font-size: ${StylesConstants.LargeFont};
`;

export const ListDescription = styled.div`
  font-size: ${StylesConstants.SmallFont};
  font-weight: 500;
`;

export const ListButtons = styled.div`
  display: flex;
  margin: ${StylesConstants.SmallMargin} 0;
`;

export const NoTasks = styled.div`
  font-weight: 500;
`;
