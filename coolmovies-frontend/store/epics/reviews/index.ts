import { combineEpics } from "redux-observable";

import { getReviews } from "./getReviews";
import { updateReview } from "./updateReview";

export const reviewEpics = combineEpics(getReviews, updateReview);
