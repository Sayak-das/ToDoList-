import ToDoitem from "./ToDoitem";
import css from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={css.itemsContainer}>
      {todoItems.map((item) => (
        <ToDoitem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        ></ToDoitem>
      ))}
    </div>
  );
};
export default TodoItems;
