import { createSlice } from '@reduxjs/toolkit';

export const historyStore = createSlice({
  name: 'historyStore',
  initialState: {
    history: {
      items: [],
    },
  },
  reducers: {
    addProductToHistory: (state, action) => {
      const { payload } = action;
      const itemInHistory = state.history.items.find((item) => item.id === payload.id);

      if (!itemInHistory) {
        state.history.items = [...state.history.items, { ...payload }];
      }
    },
    clearHistory: (state) => {
      state.history.items = [];
    },
  },
});

export const { addProductToHistory, clearHistory } = historyStore.actions;

export default historyStore.reducer;
