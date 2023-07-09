import "./ExpenseForm.css";

const ExpenseForm = () => {
    const titleChangeHandler = (event) => {
        console.log(event.target.value);
    };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="numer" min="0.1" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" mac="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button tpye="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
