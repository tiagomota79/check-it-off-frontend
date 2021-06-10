import React, { useState } from 'react';

import List from '../List';

import { useAppSelector } from '../../hooks/hooks';
import { selectLists } from '../../slices/listsSlice';

const ToDoLists: React.FC = () => {
  const [listToExpand, setListToExpand] = useState<number | undefined>();
  const { lists } = useAppSelector(selectLists);

  const expandListAction = (index: number) => {
    setListToExpand(index);
  };

  if (!lists.length) {
    return <div>No lists yet. Create one!</div>;
  }

  return (
    <div>
      {lists.map((list, index) => (
        <div key={index}>
          <button onClick={() => expandListAction(index)}>See tasks</button>
          <List
            name={list.name}
            description={list.description}
            active={list.active}
            expanded={index === listToExpand}
            index={index}
          />
        </div>
      ))}
    </div>
  );
};

export default ToDoLists;
