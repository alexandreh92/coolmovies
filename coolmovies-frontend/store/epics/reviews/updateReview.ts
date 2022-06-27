import { gql } from "@apollo/client";
import { Epic, StateObservable } from "redux-observable";
import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { ReviewActions } from "../../slices/reviews";

type UpdateReviewMutationReturnType = {
  updateMovieReviewById: {
    movieReview: Review;
  };
};

export const updateReview: Epic = (
  action$: Observable<ReviewAction["updateReview"]>,
  state$: StateObservable<RootState>,
  { client }: EpicDependencies
) =>
  action$.pipe(
    filter(ReviewActions.updateReview.match),
    switchMap(async (action) => {
      try {
        const { title, body, rating, id } = action.payload;

        const result = await client.mutate<UpdateReviewMutationReturnType>({
          mutation: updateReviewMutation,
          variables: {
            movieId: id,
            title,
            body,
            rating,
            id,
          },
        });

        if (!result.data) return;

        return ReviewActions.setReview({
          review: result.data.updateMovieReviewById.movieReview,
        });
      } catch (err) {
        return ReviewActions.updateReviewFailure();
      }
    })
  );

const updateReviewMutation = gql`
  mutation UpdateReview(
    $id: UUID!
    $title: String
    $body: String
    $rating: Int
  ) {
    updateMovieReviewById(
      input: {
        id: $id
        movieReviewPatch: { title: $title, body: $body, rating: $rating }
      }
    ) {
      movieReview {
        body
        id
        title
        rating
      }
    }
  }
`;
