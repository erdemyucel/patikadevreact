import React from "react";

function Filters({ todo, onFilterChange, selectedFilter, clearCompleted,filteredCount }) {

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{filteredCount}</strong> items left
      </span>

      <ul className="filters">
        <li>
          <a 
            href="#/" 
            onClick={() => onFilterChange("all")} 
            className={selectedFilter === "all" ? "selected" : ""}
          >
            All
          </a>
        </li>
        <li>
          <a 
            href="#/" 
            onClick={() => onFilterChange("active")}
            className={selectedFilter === "active" ? "selected" : ""}
          >
            Active
          </a>
        </li>
        <li>
          <a 
            href="#/" 
            onClick={() => onFilterChange("completed")}
            className={selectedFilter === "completed" ? "selected" : ""}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Filters;
