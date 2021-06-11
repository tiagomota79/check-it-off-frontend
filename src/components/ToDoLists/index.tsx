import React from 'react';
import { useTranslation } from 'react-i18next';

import List from '../List';

import { ListContainer, ToDoListsContainer } from './styles';

import { useAppSelector } from '../../hooks/hooks';
import { selectLists } from '../../slices/listsSlice';

const ToDoLists: React.FC = () => {
  const { t } = useTranslation();
  const lists = useAppSelector(selectLists);

  if (!lists.length) {
    return <ToDoListsContainer>{t('noList')}</ToDoListsContainer>;
  }

  return (
    <ToDoListsContainer>
      {lists.map((list, index) => (
        <ListContainer key={index}>
          <List
            title={list.title}
            description={list.description}
            active={list.active}
            index={index}
            key={index}
          />
        </ListContainer>
      ))}
    </ToDoListsContainer>
  );
};

export default ToDoLists;
