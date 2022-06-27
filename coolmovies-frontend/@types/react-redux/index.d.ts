import "react-redux";
import { AppDispatch, RootState } from "../../store/createStore";

declare module "react-redux" {
  export function useDispatch<TDispatch = Dispatch<AppDispatch>>(): TDispatch;

  export interface DefaultRootState extends RootState {}
}
