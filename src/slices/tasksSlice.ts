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
    checkOffTask: (state, action) => {
      const tasksCopy = [...state.tasks];
      tasksCopy[action.payload].active = false;

      return { ...state, tasks: tasksCopy };
    },
    uncheckTask: (state, action) => {
      const tasksCopy = [...state.tasks];
      tasksCopy[action.payload].active = true;

      return { ...state, tasks: tasksCopy };
    },
  },
});

export const { createTask, deleteTask, checkOffTask, uncheckTask } =
  tasksSlice.actions;

export const selectTasks = (state: RootState) => state.tasks.tasks;

export default tasksSlice.reducer;
