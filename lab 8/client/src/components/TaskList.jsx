import TaskItem from "./TaskItem";

function TaskList({
  todos,
  onToggle,
  onEdit,
  onDelete,
}) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">✓</div>

        <h3>No tasks yet</h3>

        <p>
          Add your first task and start getting things done.
        </p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {todos.map((todo) => (
        <TaskItem
          key={todo._id}
          todo={todo}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;