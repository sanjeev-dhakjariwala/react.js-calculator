import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const expressionSlice = createSlice({
  name: 'expression',
  initialState,
  reducers: {
    appendExpression: (state, action) => {
      return state + action.payload;
    },
    cls: () => initialState,
    calc: (state) => {
      try {
        // Evaluate the expression using eval()
        const result = eval(state);
        return result.toString();
      } catch (error) {
        return 'Error';
      }
    }
  }
});

export const { appendExpression, cls, calc } = expressionSlice.actions;
export default expressionSlice.reducer;
