import React, { useState } from 'react';

import { useAppDispatch } from '../../hooks/hooks';

import { createTask } from '../../slices/tasksSlice';

export interface IProps {
  listIndex: number;
  onCloseButton: (close: boolean) => void;
}

const AddTask: React.FC<IProps> = ({ listIndex, onCloseButton }) => {
  const [taskText, setTaskText] = useState<ITask['text']>();

  const dispatch = useAppDispatch();

  const addTaskAction = () => {
    console.log(
      `inside addTaskAction, task text: ${taskText}. listIndex: ${listIndex}`
    );
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
      <button onClick={addTaskAction}>Add Task</button>
      <button onClick={cancelAction}>Cancel</button>
    </>
  );
};
export default AddTask;
