import { combineEpics } from "redux-observable";

import { getReviews } from "./getReviews";
import { updateReview } from "./updateReview";
import { createReview } from "./createReview";

export const reviewEpics = combineEpics(getReviews, updateReview, createReview);
