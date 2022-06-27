import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {} as Movie,
};

export const slice = createSlice({
  initialState,
  name: "movies",
  reducers: {
    getMovies: () => {},
    setMovies: () => {},
    getMoviesFailure: () => {},
  },
});

export type MovieAction = typeof MovieActions;
export const { actions: MovieActions, reducer } = slice;
