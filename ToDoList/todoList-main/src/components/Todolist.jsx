import React from "react";

function Todolist({ todo, setTodo,activeTodos}) {

  const handleDelete = (index) => {
    const todoCopy = [...todo];
    todoCopy.splice(index, 1);
    setTodo(todoCopy);
  };
  const handleToggle = (index) => {
    const todoCopy = [...todo];
    todoCopy[index].isCompleted = !todoCopy[index].isCompleted;
    setTodo(todoCopy);
  }

  return (
    <ul className="todo-list">
      {todo.map((item, index) => (
        <li key={index} className={item.isCompleted===true ? "completed": ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.isCompleted}
              onChange={() => {handleToggle(index)}}
            />
            <label>{item.task}</label>
            <button
              className="destroy"
              onClick={() => handleDelete(index)}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Todolist;
