import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";
import Filters from "./components/Filters";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [filter, setFilter] = useState("all");

  const getData = (receivedData) => {
    setTodo([...todo, receivedData]);
  };

  const clearCompleted = () => {
    const activeTodos = todo.filter((item) => !item.isCompleted);
    setTodo(activeTodos);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTodos = todo.filter((item) => {
    if (filter === "all") return true;
    if (filter === "active") return !item.isCompleted;
    if (filter === "completed") return item.isCompleted;
    return true;
  });
const filteredCount = filteredTodos.length;
  return (
    <div className="todoapp">
      <Form getData={getData} />
      <Todolist
        todo={filteredTodos}

        setTodo={setTodo}
      />
      <Filters
        todo={todo}
        filteredCount={filteredCount}
        selectedFilter={filter}
        onFilterChange={handleFilterChange}
        clearCompleted={clearCompleted}
      />
    </div>
  );
}

export default App;
