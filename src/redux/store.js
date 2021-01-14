import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import itemsReducer from "./itemsSlice";
import filterReducer from "./filterSlice";

const rootPersistConfig = {
  key: "root",
  storage,
  blacklist: ["contacts"],
};

const contactsPersistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

const rootReducer = combineReducers({
  contacts: persistReducer(contactsPersistConfig, contactsReducer),
});

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

const persistedStore = { store, persistor };
export default persistedStore;
