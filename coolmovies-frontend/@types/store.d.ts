import { ReviewAction as _ReviewAction } from "../store/slices/reviews";
import { UserAction as _UserAction } from "../store/slices/user";
import {
  AppDispatch as _AppDispatch,
  RootState as _RootState,
} from "../store/createStore";

declare global {
  export { _ReviewAction as ReviewAction };
  export { _UserAction as UserAction };
  export { _AppDispatch as AppDispatch, _RootState as RootState };
}

export {};
