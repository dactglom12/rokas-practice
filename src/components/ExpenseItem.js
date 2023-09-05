import React from "react";

export function ExpenseItem({ amount, date, itemId }) {
  return (
    <div>
      <span>{date.toLocaleDateString()}</span>
      <span>Amount is {amount}</span>
      <span>Item id is {itemId}</span>
    </div>
  );
}
