import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IState {
  token: string;
}

const initialState: IState = {
	token: ''
};

const mainSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
  },
})

export const { setToken } = mainSlice.actions;
export default mainSlice.reducer;