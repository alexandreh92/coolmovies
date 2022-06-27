import { combineEpics } from "redux-observable";

import { getUser } from "./getUser";

export const userEpics = combineEpics(getUser);
