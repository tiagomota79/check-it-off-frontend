import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '../../hooks/hooks';

import { createTask } from '../../slices/tasksSlice';

export interface IProps {
  listIndex: number;
  onCloseButton: (close: boolean) => void;
}

const AddTask: React.FC<IProps> = ({ listIndex, onCloseButton }) => {
  const [taskText, setTaskText] = useState<ITask['text']>();

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const addTaskAction = () => {
    dispatch(
      createTask({
        text: taskText,
        listIndex,
        active: true,
      })
    );
    onCloseButton(false);
  };

  const cancelAction = () => {
    onCloseButton(false);
  };

  return (
    <>
      <label>Task</label>
      <input
        type='text'
        name='task'
        onChange={(event) => setTaskText(event.target.value)}
      ></input>
      <button onClick={addTaskAction}>{t('addTask')}</button>
      <button onClick={cancelAction}>{t('cancel')}</button>
    </>
  );
};
export default AddTask;
