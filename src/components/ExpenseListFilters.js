import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "../actions/filters";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused: calendarFocused }));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          value={this.props.sortBy}
          onChange={(e) => {
            if (e.target.value === "amount") {
              this.props.dispatch(sortByAmount());
            } else this.props.dispatch(sortByDate());
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.startDate}
          endDate={this.props.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.filters;
};

const ExpenseListFiltersConnected = connect(mapStateToProps)(
  ExpenseListFilters
);

export default ExpenseListFiltersConnected;
