import { createSlice } from '@reduxjs/toolkit';
import projects from '../../data/projects';

const initialState = {
  projects,
  isLoading: true,
  selectedProject: null,
};

const slideSlice = createSlice({
  name: 'slide',
  initialState,
  reducers: {
    setSelectedProject: (state, action) => {
      state.selectedProject = action.payload;
    },
  },
});

// console.log(slideSlice);
export const { setSelectedProject } = slideSlice.actions;
export default slideSlice.reducer;
