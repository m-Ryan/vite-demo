import { createSlice } from '@reduxjs/toolkit';

export interface Toast {
  id: number;
  type: string;
  message: string;
  duration: number
}

let idIndex = 0;
export default createSlice({
  name: 'toast',
  initialState: [] as Toast[],
  reducers: {
    add: (state, action: { payload: Omit<Toast, 'id'> }) => {
      state.push({
        id: idIndex++,
        ...action.payload
      });
    },
    remove: (state, action: { payload: { id: number } }) => {
      state = state.filter(item => item.id !== id)
    }
  }
})