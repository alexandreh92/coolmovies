import { gql } from "@apollo/client";
import { Epic, StateObservable } from "redux-observable";
import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { MovieActions } from "../../slices/movies";

type AllReviewsQueryReturnType = {
  allMovies: {
    nodes: Movie[];
  };
};

export const getMovies: Epic = (
  action$: Observable<MovieAction["getMovies"]>,
  state$: StateObservable<RootState>,
  { client }: EpicDependencies
) =>
  action$.pipe(
    filter(MovieActions.getMovies.match),
    switchMap(async () => {
      try {
        const result = await client.query<AllReviewsQueryReturnType>({
          query: allReviewsQuery,
        });
        return MovieActions.setMovies({
          movies: result.data.allMovies.nodes,
        });
      } catch (err) {
        return MovieActions.getMoviesFailure();
      }
    })
  );

const allReviewsQuery = gql`
  query AllMovies {
    allMovies {
      nodes {
        id
        imgUrl
        title
      }
    }
  }
`;
