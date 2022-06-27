import { gql } from "@apollo/client";
import { Epic, StateObservable } from "redux-observable";
import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";
import { toastr } from "react-redux-toastr";

import { ReviewActions } from "../../slices/reviews";

type AllReviewsQueryReturnType = {
  allMovieReviews: {
    nodes: Review[];
  };
};

export const getReviews: Epic = (
  action$: Observable<ReviewAction["getReviews"]>,
  state$: StateObservable<RootState>,
  { client }: EpicDependencies
) =>
  action$.pipe(
    filter(ReviewActions.getReviews.match),
    switchMap(async () => {
      try {
        const result = await client.query<AllReviewsQueryReturnType>({
          query: allReviewsQuery,
        });
        return ReviewActions.setReviews({
          reviews: result.data.allMovieReviews.nodes,
        });
      } catch (err) {
        toastr.error("Woops!", "Some error had occured.");
        return ReviewActions.getReviewsFailure();
      }
    })
  );

const allReviewsQuery = gql`
  query AllEpics {
    allMovieReviews {
      nodes {
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
