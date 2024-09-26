import { configureStore } from '@reduxjs/toolkit';
import overviewReducer from '@/app/redux/overviewSlice';

const store = configureStore({
  reducer: {
    overview: overviewReducer,
  },
});

export default store;
