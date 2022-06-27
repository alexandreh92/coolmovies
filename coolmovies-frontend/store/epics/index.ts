import { combineEpics } from "redux-observable";

import { reviewEpics } from "./reviews";
import { userEpics } from "./user";
import { movieEpics } from "./movies";

export const rootEpic = combineEpics(reviewEpics, userEpics, movieEpics);
