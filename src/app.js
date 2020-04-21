import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visible = getVisibleExpenses(state.expenses, state.filters);
  console.log(visible);
});

const JSX = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<JSX />, document.getElementById("app"));
