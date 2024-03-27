import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import ToDoitem from "./Components/ToDoitem";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import WelcomeMessage from "./Components/WelcomeMessage";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handelNewItem = (itemName, itemDueDate) => {
    const newToDoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newToDoItems);
  };

  const handleDeleteItems = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    console.log(`Deleted ${todoItemName}`);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo onNewItem={handelNewItem} />
      {todoItems.length == 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItems}
      ></TodoItems>
    </center>
  );
}

export default App;
