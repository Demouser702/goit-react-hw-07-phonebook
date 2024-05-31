import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  term: '',
  isLoading: false,
  error: null,
};
export const fetchFilteredContacts = createAsyncThunk(
  'filter/fetchFilteredContacts',
  async filterTerm => {
    const response = await axios.get(
      `https://6659b407de346625136d976e.mockapi.io/api/contacts?filter=${filterTerm}`
    );
    return response.data;
  }
);

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.term = action.payload;
    },
  },
  extraReducers: {
    [fetchFilteredContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchFilteredContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      // Poți actualiza starea pentru a stoca rezultatele filtrate în funcție de termenul de căutare
    },
    [fetchFilteredContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export const { setSearchTerm, resetFilter } = filterSlice.actions;
export const selectFilter = state => state.filter;
export const filterReducer = filterSlice.reducer;
