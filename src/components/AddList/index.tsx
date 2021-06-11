import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '../../hooks/hooks';
import { createList } from '../../slices/listsSlice';

const AddList: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const [listTitle, setListTitle] = useState<IList['title']>();
  const [listDescription, setListDescription] =
    useState<IList['description']>();

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const activeAddList = () => {
    setActive(true);
  };

  const addListAction = () => {
    dispatch(
      createList({
        title: listTitle,
        description: listDescription,
        active: true,
      })
    );
    setActive(false);
  };

  return (
    <div>
      {!active && <button onClick={activeAddList}>{t('addAList')}</button>}
      {active && (
        <>
          <label>{t('title')}</label>
          <input
            type='text'
            name='name'
            onChange={(event) => setListTitle(event.target.value)}
          ></input>
          <label>{t('description')}</label>
          <input
            type='text'
            name='description'
            onChange={(event) => setListDescription(event.target.value)}
          ></input>
          <button onClick={addListAction}>{t('addList')}</button>
        </>
      )}
    </div>
  );
};
export default AddList;
