import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { exampleReducer, exampleEpics } from "./slices";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import { client } from "../services/apollo";

const rootEpic = combineEpics(exampleEpics);

export const createStore = ({ epicDependencies }: CreateStoreOptions) => {
  const epicMiddleware = createEpicMiddleware({
    dependencies: epicDependencies,
  });

  const createdStore = configureStore({
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(epicMiddleware),
    reducer: {
      example: exampleReducer,
    },
  });

  epicMiddleware.run(rootEpic);

  return createdStore;
};

const store = createStore({ epicDependencies: { client } });

export default store;

export type RootState = ReturnType<ReturnType<typeof createStore>["getState"]>;
export type AppDispatch = ReturnType<typeof createStore>["dispatch"];

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
