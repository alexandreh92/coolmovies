import { gql } from "@apollo/client";
import { Epic, StateObservable } from "redux-observable";
import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { ReviewActions } from "../../slices/reviews";

type CreateReviewMutationReturnType = {
  createMovieReview: {
    movieReview: Review;
  };
};

export const createReview: Epic = (
  action$: Observable<ReviewAction["createReview"]>,
  state$: StateObservable<RootState>,
  { client }: EpicDependencies
) =>
  action$.pipe(
    filter(ReviewActions.createReview.match),
    switchMap(async (action) => {
      try {
        console.log(action.payload);

        const { title, body, rating, movieId, userReviewerId } = action.payload;

        const result = await client.mutate<CreateReviewMutationReturnType>({
          mutation: createReviewMutation,
          variables: {
            title,
            body,
            rating,
            movieId,
            userReviewerId,
          },
        });

        console.log(result);

        if (!result.data) return;

        return ReviewActions.setNewReview({
          review: result.data.createMovieReview.movieReview,
        });
      } catch (err) {
        return ReviewActions.createReviewFailure();
      }
    })
  );

const createReviewMutation = gql`
  mutation CreateReview(
    $title: String!
    $body: String!
    $rating: Int!
    $movieId: UUID!
    $userReviewerId: UUID!
  ) {
    createMovieReview(
      input: {
        movieReview: {
          title: $title
          body: $body
          rating: $rating
          movieId: $movieId
          userReviewerId: $userReviewerId
        }
      }
    ) {
      movieReview {
        body
        id
        title
        movieByMovieId {
          id
          imgUrl
          title
        }
        rating
        userByUserReviewerId {
          name
          id
        }
      }
    }
  }
`;
