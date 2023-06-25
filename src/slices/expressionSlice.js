import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const expressionSlice = createSlice({
  name: 'expression',
  initialState: { value: initialState },
  reducers: {
    expressionFun: (state, action) => {
      state.value = action.payload;
    }
  }
});

const { expressionFun } = expressionSlice.actions;
export default expressionSlice.reducer;
export { expressionFun };
