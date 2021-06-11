import React from 'react';
import { useTranslation } from 'react-i18next';

import List from '../List';

import { useAppSelector } from '../../hooks/hooks';
import { selectLists } from '../../slices/listsSlice';

const ToDoLists: React.FC = () => {
  const { t } = useTranslation();
  const lists = useAppSelector(selectLists);

  if (!lists.length) {
    return <div>{t('noList')}</div>;
  }

  return (
    <div>
      {lists.map((list, index) => (
        <div key={index}>
          <List
            name={list.name}
            description={list.description}
            active={list.active}
            index={index}
          />
        </div>
      ))}
    </div>
  );
};

export default ToDoLists;
