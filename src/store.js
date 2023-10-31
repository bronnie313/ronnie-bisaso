import { configureStore } from '@reduxjs/toolkit';
import slideReducer from "./features/slide/slideSlice";


const store = configureStore({
    reducer: {
        slide: slideReducer,
    }
})


export default store;