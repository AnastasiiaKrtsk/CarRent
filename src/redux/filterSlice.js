// filterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: null,
    selectedMake: null,
    filteredCars: [],
  },
  reducers: {
    showFilter(state, action) {
      state.filter = action.payload;
    },
    selectMake(state, action) {
      state.selectedMake = action.payload;
    },
    updateFilter(state, action) {
      state.selectedMake = action.payload;
    },
    setFilteredCars(state, action) {
      state.filteredCars = action.payload;
    },
  },
});

export const { showFilter, selectMake, updateFilter, setFilteredCars } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
