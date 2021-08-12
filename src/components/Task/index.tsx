import React from 'react';

import Button from '../Button';

import { TaskContainer, TaskText } from './styles';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { toggleTask, deleteTask, selectTasks } from '../../slices/tasksSlice';
import { Icons } from '../../constants/icons';

export interface IProps {
  id: string;
  text: string;
  listTitle: string;
  listId: string;
  active: boolean;
}

const Task: React.FC<IProps> = ({ id, text, listTitle, listId, active }) => {
  const dispatch = useAppDispatch();

  const tasks = useAppSelector(selectTasks);
  const taskIndex = tasks.findIndex(
    (task) => task.text === text && task.id === id
  );

  const checkTaskAction = () => {
    dispatch(toggleTask(taskIndex));
  };

  const deleteTaskAction = () => {
    dispatch(deleteTask(taskIndex));
  };

  return (
    <TaskContainer>
      <Button
        action={checkTaskAction}
        icon={active ? Icons.Check : Icons.Cancel}
        withMargin
      />
      <TaskText checked={active}>{text}</TaskText>
      <Button action={deleteTaskAction} icon={Icons.Trash} withMargin={false} />
    </TaskContainer>
  );
};

export default Task;
