import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import persistedStore from "./redux/store";

import "./index.css";

ReactDOM.render(
  <Provider store={persistedStore.store}>
    <PersistGate loading={null} persistor={persistedStore.persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
