import { useState } from "react";

function TaskForm({ onAdd }) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTodo.trim()) {
      return;
    }

    onAdd(newTodo.trim());

    setNewTodo("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>

      <input
        type="text"
        value={newTodo}
        onChange={(e) =>
          setNewTodo(e.target.value)
        }
        placeholder="What do you need to accomplish?"
      />

      <button type="submit">
        + Add Task
      </button>

    </form>
  );
}

export default TaskForm;