import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { deleteTask, selectTasks } from '../../slices/tasksSlice';

export interface IProps {
  text: string;
  listIndex: number;
  active: boolean;
}

const Task: React.FC<IProps> = ({ text, listIndex, active }) => {
  const dispatch = useAppDispatch();

  const tasks = useAppSelector(selectTasks);

  const deleteTaskAction = () => {
    const taskIndex = tasks.findIndex(
      (task) => task.text === text && task.listIndex === listIndex
    );

    dispatch(deleteTask(taskIndex));
  };

  return (
    <>
      <div>{text}</div>
      <button onClick={deleteTaskAction}>Delete task</button>
    </>
  );
};

export default Task;
