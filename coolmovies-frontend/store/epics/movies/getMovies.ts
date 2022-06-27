import { gql } from "@apollo/client";
import { Epic, StateObservable } from "redux-observable";
import { Observable } from "rxjs";
import { filter, map, switchMap } from "rxjs/operators";

import { MovieActions } from "../../slices/movies";

export const getMovies: Epic = (
  action$: Observable<MovieAction["getMovies"]>,
  state$: StateObservable<RootState>,
  { client }: EpicDependencies
) =>
  action$.pipe(
    filter(MovieActions.getMovies.match),
    switchMap(async () => {
      try {
        const result = await client.query({
          query: allMoviesQuery,
        });
        return MovieActions.setMovies({ data: result.data });
      } catch (err) {
        return MovieActions.getMoviesFailure();
      }
    })
  );

const allMoviesQuery = gql`
  query AllMovies {
    allMovies {
      nodes {
        id
        imgUrl
        movieDirectorId
        userCreatorId
        title
        releaseDate
        nodeId
        userByUserCreatorId {
          id
          name
          nodeId
        }
      }
    }
  }
`;
