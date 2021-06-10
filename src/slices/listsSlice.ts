import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState: IToDoLists = {
  lists: [],
};

export const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    createList: (state, action) => {
      const listsCopy = [...state.lists];
      listsCopy.push(action.payload);

      return { ...state, lists: listsCopy };
    },
    deleteList: (state, action) => {
      const listsCopy = [...state.lists];
      listsCopy.splice(action.payload, 1);

      return { ...state, lists: listsCopy };
    },
  },
});

export const { createList, deleteList } = listsSlice.actions;

export const selectLists = (state: RootState) => state.lists;

export default listsSlice.reducer;
