import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  data: [] as Review[],
};

export const slice = createSlice({
  initialState,
  name: "reviews",
  reducers: {
    getReviews: () => {},
    setReviews: (state, action: PayloadAction<{ reviews: Review[] }>) => {
      state.data = action.payload.reviews;
    },
    getReviewsFailure: () => {},
    updateReview: (state, action) => {},
    setReview: (
      state,
      action: PayloadAction<{
        review: Review;
      }>
    ) => {
      state.data = state.data.map((stateReview) =>
        stateReview.id === action.payload.review.id
          ? { ...stateReview, ...action.payload.review }
          : stateReview
      );
    },
    updateReviewFailure: () => {},
    createReview: (state, action: PayloadAction<NewReviewType>) => {},
    setNewReview: (
      state,
      action: PayloadAction<{
        review: Review;
      }>
    ) => {
      state.data = [...state.data, action.payload.review];
    },
    createReviewFailure: () => {},
  },
});

export const { actions: ReviewActions, reducer } = slice;
export type ReviewAction = typeof ReviewActions;

export type NewReviewType = {
  title: string;
  body: string;
  rating?: number | null;
  movieId: string;
  userReviewerId: string;
};
