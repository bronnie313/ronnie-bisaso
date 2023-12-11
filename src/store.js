import { configureStore } from '@reduxjs/toolkit';
import slideReducer from './features/slide/slideSlice';
import modalReducer from './features/modal/modalSlice';

const store = configureStore({
  reducer: {
    slide: slideReducer,
    modal: modalReducer,
  },
});

export default store;
