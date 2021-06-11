import React from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { toggleTask, deleteTask, selectTasks } from '../../slices/tasksSlice';

export interface IProps {
  text: string;
  listTitle: string;
  active: boolean;
  taskIndex: number;
}

const Task: React.FC<IProps> = ({ text, listTitle, active, taskIndex }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const tasks = useAppSelector(selectTasks);

  const checkTaskAction = () => {
    dispatch(toggleTask(taskIndex));
  };

  const deleteTaskAction = () => {
    const taskIndex = tasks.findIndex(
      (task) => task.text === text && task.listTitle === listTitle
    );

    dispatch(deleteTask(taskIndex));
  };

  return (
    <>
      <div>
        {text} - index: {taskIndex} - active: {String(active)}
      </div>
      <button onClick={checkTaskAction}>
        {active ? t('checkTask') : t('uncheckTask')}
      </button>
      <button onClick={deleteTaskAction}>{t('deleteTask')}</button>
    </>
  );
};

export default Task;
