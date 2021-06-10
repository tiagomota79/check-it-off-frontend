import React from 'react';

import { deleteList } from '../../slices/listsSlice';
import { useAppDispatch } from '../../hooks/hooks';

export interface IProps {
  name: string;
  description: string;
  active: boolean;
  expanded: boolean;
  index: number;
}

const List: React.FC<IProps> = ({
  name,
  description,
  active,
  expanded,
  index,
}) => {
  const dispatch = useAppDispatch();

  const deleteListAction = () => {
    dispatch(deleteList(index));
  };

  if (!active) {
    return null;
  }

  return (
    <>
      <div>{name}</div>
      <div>{description}</div>
      <button onClick={deleteListAction}>Delete list</button>
      {expanded && (
        <div>{`Tasks will appear here. This list is index ${index}`}</div>
      )}
    </>
  );
};

export default List;
