import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
    filter: '0',
  },
  reducers: {
    updateQuery: (state, action) => {
      state.query = action.payload;
    },
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { updateQuery, updateFilter } = searchSlice.actions;

export default searchSlice.reducer;
