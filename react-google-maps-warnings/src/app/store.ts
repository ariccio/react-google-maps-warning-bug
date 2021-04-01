import { configureStore, ThunkAction, Action, createSlice } from '@reduxjs/toolkit';


interface blankSliceState {

}

const initialState: blankSliceState = {

}
const slice = createSlice({
  name: 'emptySlice',
  initialState,
  reducers: {

  }
})

export const store = configureStore({
  reducer: {
    empty: slice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
