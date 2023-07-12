import Card from "../UI/Card";
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  // drived or computed state example
  // let filterInfoText = "2019, 2021, 2022 & 2023";

  // if (filteredYear === "2019") {
  //   filterInfoText = "2020, 2021, 2022 & 2023";
  // } else if (filteredYear === "2021") {
  //   filterInfoText = "2019, 2020, 2022 & 2023";
  // } else if (filteredYear === "2022") {
  //   filterInfoText = "2019, 2020, 2021 & 2023";
  // } else {
  //   filterInfoText = "2019, 2020, 2021 & 2022";
  // }

  const onChangeHandler = (changedDate) => {
    setFilteredYear(changedDate);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectDate={onChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
        {/* <p>Data for years {filterInfoText} is hidden.</p> */}
      </Card>
    </div>
  );
}

export default Expenses;
