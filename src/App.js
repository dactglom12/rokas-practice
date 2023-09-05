import logo from "./logo.svg";
import "./App.css";
import { ProfileInfo } from "./components/ProfileInfo";
import { ExpenseItem } from "./components/ExpenseItem";
import "./javascript-theory/array-methods";

const expenses = [
  {
    date: new Date(),
    itemId: "first-item-id",
    amount: 25,
  },
  {
    date: new Date("2020-02-02"),
    itemId: "second-item-id",
    amount: 50,
  },
  {
    date: new Date("2021-02-03"),
    itemId: "third-item-id",
    amount: 100,
  },
  {
    date: new Date("2024-04-04"),
    itemId: "fourth-item-id",
    amount: 2400,
  },
];

const employees = [
  {
    fullName: "Rokas Musteikis",
    age: 20,
    employmentAge: 2,
  },
  {
    fullName: "Volodymyr Molchanov",
    age: 24,
    employmentAge: 10,
  },
  {
    fullName: "Vasya Arnold",
    age: 20,
    employmentAge: 10,
  },
  {
    fullName: "Arnold Scharzenegger",
    age: 30,
    employmentAge: 15,
  },
];

function renderExpenseItem(
  currentItem,
  indexOfCurrentItem,
  arrayWeAreOperationOn
) {
  return (
    <ExpenseItem
      amount={currentItem.amount}
      date={currentItem.date}
      itemId={currentItem.itemId}
    />
  );
}

/* 
FIRST ITERATION of expenses.map
CURRENT ITEM - {
    date: new Date(),
    itemId: "first-item-id",
    amount: 25
}
CURRENT INDEX - 0
arrayWeAreOperationOn - expenses

OUR RESULT - <ExpenseItem
      amount={currentItem.amount}
      date={currentItem.date}
      itemId={currentItem.itemId}
    />

*/

// HOMEWORK - create the EmployeeItem component that renders an employee's fullName, employmentAge, age
// And render this array using employees.map(<YOURCALLBACKHERE>)

function App() {
  return (
    <div>
      Hello world <b>ROKAS </b>
      {/* <ProfileInfo />
      <ProfileInfo /> */}
      {expenses.map(renderExpenseItem)}
    </div>
  );
}

export default App;
