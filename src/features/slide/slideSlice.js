import { createSlice } from "@reduxjs/toolkit";
import projects from "../../data/projects";

const initialState = {
    projects: projects,
    isLoading: true,
}

const slideSlice = createSlice({
    name: 'slide',
    initialState,
    reducers: {},
})

// console.log(slideSlice);

export default slideSlice.reducer;