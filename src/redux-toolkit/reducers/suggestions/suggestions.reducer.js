import { getUserSuggestions } from '@redux/api/suggestions';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isLoading: false
};

const suggestionSlice = createSlice({
  name: 'suggestions',
  initialState,
  reducers: {
    addToSuggestions: (state, action) => {
      const { isLoading, users } = action.payload;
      state.users = [...users];
      state.isLoading = isLoading;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUserSuggestions.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserSuggestions.fulfilled, (state, action) => {
      state.isLoading = false;
      const { users } = action.payload;
      state.users = [...users];
    });
    builder.addCase(getUserSuggestions.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

export const { addToSuggestions } = suggestionSlice.actions;
export default suggestionSlice.reducer;
