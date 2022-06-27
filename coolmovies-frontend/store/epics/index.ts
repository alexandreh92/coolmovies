import { combineEpics } from "redux-observable";

import { reviewEpics } from "./reviews";
import { userEpics } from "./user";

export const rootEpic = combineEpics(reviewEpics, userEpics);
