import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilters";

const rootRoute = () => (
  <div>
    <ExpenseListFilter />
    <ExpenseList />
  </div>
);

export default rootRoute;
