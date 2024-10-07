import { configureStore } from '@reduxjs/toolkit';
import overviewReducer from '@/app/redux/overviewSlice';
import authReducer from '@/app/redux/authSlice';

const store = configureStore({
  reducer: {
    overview: overviewReducer,
    auth: authReducer,
  },
});

export default store;
