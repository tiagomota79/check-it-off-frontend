import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../Button';

import { AddListContainer, Input, Label } from './styles';

import { useAppDispatch } from '../../hooks/hooks';
import { createList } from '../../slices/listsSlice';
import { Icons } from '../../constants/icons';

import { generateRandomString } from '../../utils';

const AddList: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const [listTitle, setListTitle] = useState<IList['title']>();
  const [listDescription, setListDescription] =
    useState<IList['description']>();

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const toggleAddList = () => {
    setActive(!active);
  };

  const addListAction = () => {
    dispatch(
      createList({
        id: generateRandomString(),
        title: listTitle,
        description: listDescription,
        active: true,
      })
    );
    setActive(false);
  };

  return (
    <AddListContainer>
      {!active && (
        <Button
          label={t('addAList')}
          action={toggleAddList}
          icon={Icons.Plus}
          withMargin={false}
        />
      )}
      {active && (
        <>
          <Label>{t('title')}</Label>
          <Input
            type='text'
            name='name'
            onChange={(event) => setListTitle(event.target.value)}
          ></Input>
          <Label>{t('description')}</Label>
          <Input
            type='text'
            name='description'
            onChange={(event) => setListDescription(event.target.value)}
          ></Input>
          <Button action={addListAction} icon={Icons.Plus} withMargin />
          <Button action={toggleAddList} icon={Icons.Cancel} withMargin />
        </>
      )}
    </AddListContainer>
  );
};
export default AddList;
