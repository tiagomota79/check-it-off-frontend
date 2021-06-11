import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import listsReducer from './slices/listsSlice';
import tasksReducer from './slices/tasksSlice';

export const store = configureStore({
  reducer: {
    lists: listsReducer,
    tasks: tasksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
