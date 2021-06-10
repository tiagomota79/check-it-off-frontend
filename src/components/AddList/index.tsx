import React, { useState } from 'react';

import { useAppDispatch } from '../../hooks/hooks';
import { createList } from '../../slices/listsSlice';

const AddList: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const [listName, setListName] = useState<IList['name']>();
  const [listDescription, setListDescription] =
    useState<IList['description']>();

  const dispatch = useAppDispatch();

  const activeAddList = () => {
    setActive(true);
  };

  const addListAction = () => {
    dispatch(
      createList({
        name: listName,
        description: listDescription,
        active: true,
      })
    );
    setActive(false);
  };

  return (
    <div>
      {!active && <button onClick={activeAddList}>Add List</button>}
      {active && (
        <>
          <label>Name</label>
          <input
            type='text'
            name='name'
            onChange={(event) => setListName(event.target.value)}
          ></input>
          <label>Description</label>
          <input
            type='text'
            name='description'
            onChange={(event) => setListDescription(event.target.value)}
          ></input>
          <button onClick={addListAction}>Add List</button>
        </>
      )}
    </div>
  );
};
export default AddList;
