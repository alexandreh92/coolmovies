import { reducer as toastrReducer } from "react-redux-toastr";

import { reducer as ReviewReducer } from "./reviews";
import { reducer as UserReducer } from "./user";
import { reducer as MovieReducer } from "./movies";

export const reducers = {
  reviews: ReviewReducer,
  user: UserReducer,
  movie: MovieReducer,
  toastr: toastrReducer,
};
