import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import AddTask from '../AddTask.tsx';
import Task from '../Task';

import { deleteList } from '../../slices/listsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectTasks } from '../../slices/tasksSlice';

export interface IProps {
  title: string;
  description: string;
  active: boolean;
  index: number;
}

const List: React.FC<IProps> = ({ title, description, active, index }) => {
  const [createTaskOpen, setCreateTaskOpen] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const tasks = useAppSelector(selectTasks).filter(
    (task) => task.listTitle === title
  );

  const deleteListAction = () => {
    dispatch(deleteList(index));
  };

  const createTaskAction = () => {
    setCreateTaskOpen(true);
  };

  if (!active) {
    return null;
  }

  return (
    <>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? t('hideTasks') : t('seeTasks')}
      </button>
      <div>{title}</div>
      <div>{description}</div>
      {!createTaskOpen && (
        <button onClick={createTaskAction}>{t('createTask')}</button>
      )}
      {createTaskOpen && (
        <AddTask listTitle={title} onCloseButton={setCreateTaskOpen} />
      )}
      <button onClick={deleteListAction}>{t('deleteList')}</button>
      {expanded &&
        tasks.length > 0 &&
        tasks.map((task, index) => (
          <Task
            key={index}
            text={task.text}
            listTitle={task.listTitle}
            active={task.active}
            taskIndex={index}
          />
        ))}
      {expanded && !tasks.length && <div>{t('noTasks')}</div>}
    </>
  );
};

export default List;
