import { gql } from "@apollo/client";
import { Epic, StateObservable } from "redux-observable";
import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { MovieActions } from "../../slices/movies";

type AllMoviesQueryReturnType = {
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
        const result = await client.query<AllMoviesQueryReturnType>({
          query: allMoviesQuery,
        });
        return MovieActions.setMovies({ movies: result.data.allMovies.nodes });
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
