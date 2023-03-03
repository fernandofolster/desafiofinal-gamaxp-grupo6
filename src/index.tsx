import React from "react";
import ReactDOM from "react-dom/client";
import storeConfig from "./storeConfig/store";
import { Provider } from "react-redux";
import App from "./App";

const store = storeConfig();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
