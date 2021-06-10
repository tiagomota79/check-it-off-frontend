import React, { useState } from 'react';

import AddTask from '../AddTask.tsx';
import Task from '../Task';

import { deleteList } from '../../slices/listsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectTasks } from '../../slices/tasksSlice';

export interface IProps {
  name: string;
  description: string;
  active: boolean;
  index: number;
}

const List: React.FC<IProps> = ({ name, description, active, index }) => {
  const [createTaskOpen, setCreateTaskOpen] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const tasks = useAppSelector(selectTasks).filter(
    (task) => task.listIndex === index
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
      <button onClick={() => setExpanded(!expanded)}>See/hide tasks</button>
      <div>{name}</div>
      <div>{description}</div>
      {!createTaskOpen && (
        <button onClick={createTaskAction}>Create task</button>
      )}
      {createTaskOpen && (
        <AddTask listIndex={index} onCloseButton={setCreateTaskOpen} />
      )}
      <button onClick={deleteListAction}>Delete list</button>
      {expanded &&
        tasks.length &&
        tasks.map((task, index) => (
          <Task
            text={task.text}
            listIndex={task.listIndex}
            active={task.active}
          />
        ))}
      {expanded && !tasks.length && <div>No tasks yet. Create one!</div>}
    </>
  );
};

export default List;
