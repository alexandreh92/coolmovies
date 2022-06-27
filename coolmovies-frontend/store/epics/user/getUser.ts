import { gql } from "@apollo/client";
import { Epic, StateObservable } from "redux-observable";
import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { UserActions } from "../../slices/user";

type CurrentUserQueryReturnType = {
  currentUser: User;
};

export const getUser: Epic = (
  action$: Observable<UserAction["getUser"]>,
  state$: StateObservable<RootState>,
  { client }: EpicDependencies
) =>
  action$.pipe(
    filter(UserActions.getUser.match),
    switchMap(async () => {
      try {
        const result = await client.query<CurrentUserQueryReturnType>({
          query: currentUserQuery,
        });

        return UserActions.setUser({
          user: result.data.currentUser,
        });
      } catch (err) {
        return UserActions.getUserFailure();
      }
    })
  );

const currentUserQuery = gql`
  query CurrentUser {
    currentUser {
      id
      name
    }
  }
`;
