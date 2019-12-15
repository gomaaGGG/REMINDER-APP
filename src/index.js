import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { createStore } from "redux";

import reminders from "./reducers/index";
const store = createStore(reminders);

ReactDom.render(
  <Provider store={store}>
    {" "}
    <App />{" "}
  </Provider>,
  document.getElementById("root")
);
