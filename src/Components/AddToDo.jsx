import { useState } from "react";

function AddToDo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handelNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handelDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handelAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };
  return (
    <div className="container text-center">
      <div className="row sd-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter TODO here"
            value={todoName}
            onChange={handelNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handelDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success sd-button"
            onClick={handelAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
