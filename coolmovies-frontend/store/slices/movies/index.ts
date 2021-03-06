import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  data: [] as Movie[],
};

export const slice = createSlice({
  initialState,
  name: "movies",
  reducers: {
    getMovies: () => {},
    setMovies: (state, action: PayloadAction<{ movies: Movie[] }>) => {
      state.data = action.payload.movies;
    },
    getMoviesFailure: () => {},
  },
});

export const { actions: MovieActions, reducer } = slice;
export type MovieAction = typeof MovieActions;
