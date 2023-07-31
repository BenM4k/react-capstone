import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './data/dataSlice';
import searchSlice from './search/searchSlice';

const store = configureStore({
  reducer: {
    data: dataSlice,
    search: searchSlice,
  },
});

export default store;
