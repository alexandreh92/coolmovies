import { client } from "../services/apollo";

import { createStore } from "./createStore";

export const store = createStore({ epicDependencies: { client } });
