import { ReviewAction as _ReviewAction } from "../store/slices/reviews";
import {
  AppDispatch as _AppDispatch,
  RootState as _RootState,
} from "../store/createStore";

declare global {
  export { _ReviewAction as ReviewAction };
  export { _AppDispatch as AppDispatch, _RootState as RootState };
}

export {};
