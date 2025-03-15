import { createSlice } from '@reduxjs/toolkit';

interface ModeState {
    lightMode: boolean;
  }
  
  const initialState: ModeState = {
    lightMode: false,
  };

  export const lightModeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
      toggleMode: (state) => {
        state.lightMode = !state.lightMode;
      },
    },
  });
  
  export const { toggleMode } = lightModeSlice.actions;
  
  export default lightModeSlice.reducer;