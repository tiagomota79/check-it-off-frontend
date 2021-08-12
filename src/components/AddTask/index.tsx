import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../Button';

import { AddTaskButtons, AddTaskContainer } from './styles';
import { Input, Label } from '../AddList/styles';

import { useAppDispatch } from '../../hooks/hooks';
import { createTask } from '../../slices/tasksSlice';
import { Icons } from '../../constants/icons';
import { generateRandomString } from '../../utils';

export interface IProps {
  listId: string;
  listTitle: string;
  onCloseButton: (close: boolean) => void;
}

const AddTask: React.FC<IProps> = ({ listId, listTitle, onCloseButton }) => {
  const [taskText, setTaskText] = useState<ITask['text']>();

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const addTaskAction = () => {
    dispatch(
      createTask({
        id: generateRandomString(),
        text: taskText,
        listTitle,
        listId,
        active: true,
      })
    );
    onCloseButton(false);
  };

  const cancelAction = () => {
    onCloseButton(false);
  };

  return (
    <AddTaskContainer>
      <Label>{t('task')}</Label>
      <Input
        type='text'
        name='task'
        onChange={(event) => setTaskText(event.target.value)}
      />
      <AddTaskButtons>
        <Button action={addTaskAction} icon={Icons.Plus} withMargin />
        <Button action={cancelAction} icon={Icons.Cancel} withMargin={false} />
      </AddTaskButtons>
    </AddTaskContainer>
  );
};
export default AddTask;
