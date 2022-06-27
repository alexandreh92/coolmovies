import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: User = {
  id: "",
  name: "",
};

export const slice = createSlice({
  initialState,
  name: "reviews",
  reducers: {
    getUser: () => {},
    setUser: (state, { payload: { user } }: PayloadAction<{ user: User }>) => {
      state.id = user.id;
      state.name = user.name;
    },
    getUserFailure: () => {},
  },
});

export const { actions: UserActions, reducer } = slice;
export type UserAction = typeof UserActions;
