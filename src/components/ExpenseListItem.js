import React from "react";
import { removeExpense } from "../actions/expenses";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ExpenseListItem = (props) => (
  <li>
    <Link to={`/edit/${props.expense.id}`}>
      <h3>{props.expense.description}</h3>
    </Link>
    <p>
      {props.expense.amount} - {props.expense.createdAt}
    </p>
    <button
      onClick={() => {
        console.log(props.key);
        props.dispatch(removeExpense({ id: props.expense.id }));
      }}
    >
      Remove
    </button>
  </li>
);

const ExpenseListItemConnected = connect()(ExpenseListItem);

export default ExpenseListItemConnected;
