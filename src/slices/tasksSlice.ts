import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState: ITasksState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask: (state, action) => {
      const tasksCopy = [...state.tasks];
      tasksCopy.push(action.payload);

      return { ...state, tasks: tasksCopy };
    },
    deleteTask: (state, action) => {
      const tasksCopy = [...state.tasks];
      tasksCopy.splice(action.payload, 1);

      return { ...state, tasks: tasksCopy };
    },
    toggleTask: (state, action) => {
      const taskIndex = action.payload;
      const tasksCopy = [...state.tasks];
      const taskToCheckCopy = { ...tasksCopy[taskIndex] };
      taskToCheckCopy.active = !taskToCheckCopy.active;
      tasksCopy.splice(taskIndex, 1, taskToCheckCopy);

      return { ...state, tasks: tasksCopy };
    },
  },
});

export const { createTask, deleteTask, toggleTask } = tasksSlice.actions;

export const selectTasks = (state: RootState) => state.tasks.tasks;

export default tasksSlice.reducer;
