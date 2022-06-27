import { combineEpics } from "redux-observable";

import { reviewEpics } from "./reviews";

export const rootEpic = combineEpics(reviewEpics);
