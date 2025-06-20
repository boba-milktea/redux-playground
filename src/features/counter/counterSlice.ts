import {
  createSlice,
  createAsyncThunk,
  type PayloadAction
} from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { fetchCount } from './counterAPI';

interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'error';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle'
};

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = 'error';
      });
  }
});

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;
export default counterSlice.reducer;
