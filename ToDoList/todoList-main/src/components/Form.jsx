import React, { useState } from "react";

function Form({ getData }) {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({
    task: "",
    isCompleted: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.task.trim()) {
      getData(input);
      setInput({
        task: "",
        isCompleted: false,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={"new-todo"}
        placeholder="What needs to be done?"
        value={input.task}
        onChange={(e) =>
          setInput({
            ...input,
            task: e.target.value,
          })
        }
      />
    </form>
  );
}

export default Form;
