import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";
import mealReducers from "../reducers/mealReducers";
import cocktailReducers from "../reducers/cocktailReducers";
import authReducers from "../reducers/authReducers";

const rootReducer = combineReducers({
  meal: mealReducers,
  cocktail: cocktailReducers,
  auth: authReducers,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
export const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(thunk),
});

export const persistor = persistStore(store);
