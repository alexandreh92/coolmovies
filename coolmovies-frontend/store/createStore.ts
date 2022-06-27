import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";

import { rootEpic } from "./epics";
import { reducers } from "./slices";

export const createStore = ({ epicDependencies }: CreateStoreOptions) => {
  const epicMiddleware = createEpicMiddleware({
    dependencies: epicDependencies,
  });

  const createdStore = configureStore({
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(epicMiddleware),
    reducer: reducers,
  });

  epicMiddleware.run(rootEpic);

  return createdStore;
};

export type RootState = ReturnType<ReturnType<typeof createStore>["getState"]>;
export type AppDispatch = ReturnType<typeof createStore>["dispatch"];
