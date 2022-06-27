import { ReviewAction as _ReviewAction } from "../store/slices/reviews";
import { UserAction as _UserAction } from "../store/slices/user";
import { MovieAction as _MovieAction } from "../store/slices/movies";
import {
  AppDispatch as _AppDispatch,
  RootState as _RootState,
} from "../store/createStore";

declare global {
  export { _ReviewAction as ReviewAction };
  export { _UserAction as UserAction };
  export { _MovieAction as MovieAction };
  export { _AppDispatch as AppDispatch, _RootState as RootState };
}

export {};
