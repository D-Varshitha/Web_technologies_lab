function TaskItem({
  todo,
  onToggle,
  onEdit,
  onDelete,
}) {
  return (
    <div
      className={`task-item ${
        todo.completed ? "completed-task" : ""
      }`}
    >

      <div className="task-left">

        <button
          className={`check-button ${
            todo.completed ? "checked" : ""
          }`}
          onClick={() => onToggle(todo)}
          title={
            todo.completed
              ? "Mark as pending"
              : "Mark as completed"
          }
        >
          {todo.completed ? "✓" : ""}
        </button>

        <div className="task-content">

          <span className="task-text">
            {todo.task}
          </span>

          <span
            className={`status ${
              todo.completed
                ? "status-completed"
                : "status-pending"
            }`}
          >
            {todo.completed
              ? "Completed"
              : "Pending"}
          </span>

        </div>

      </div>

      <div className="task-actions">

        <button
          className="edit-button"
          onClick={() => onEdit(todo)}
          title="Edit task"
        >
          Edit
        </button>

        <button
          className="delete-button"
          onClick={() => onDelete(todo._id)}
          title="Delete task"
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskItem;