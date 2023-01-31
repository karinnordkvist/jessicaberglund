import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  now: '',
  menuOpen: false,
};

export const now = createSlice({
  name: 'now',
  initialState: initialState,
  reducers: {
    setMenuOpen: (state, action) => {
      state.menuOpen = !state.menuOpen;
    },
  },
});
