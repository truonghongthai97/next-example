import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";

import { setupListeners } from "@reduxjs/toolkit/query";
import { pokemonApi } from "../services/pokemon";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,

    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);
