import { combineEpics } from "redux-observable";

import { getMovies } from "./getMovies";

export const movieEpics = combineEpics(getMovies);
