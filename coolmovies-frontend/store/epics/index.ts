import { combineEpics } from "redux-observable";

import { movieEpics } from "./movies";

export const rootEpic = combineEpics(movieEpics);
