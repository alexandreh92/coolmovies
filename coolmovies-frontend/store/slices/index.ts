import { reducer as ReviewReducer } from "./reviews";
import { reducer as UserReducer } from "./user";

export const reducers = {
  reviews: ReviewReducer,
  user: UserReducer,
};
