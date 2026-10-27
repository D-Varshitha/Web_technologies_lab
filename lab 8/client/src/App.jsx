import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const API_URL = "http://localhost:5000/api/todos";

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch todos when application loads
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(API_URL);
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  // Add todo
  const addTodo = async (task) => {
    try {
      const response = await axios.post(API_URL, {
        task: task,
      });

      setTodos((prevTodos) => [
        response.data,
        ...prevTodos,
      ]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  // Toggle completed status
  const toggleTodo = async (todo) => {
    try {
      const response = await axios.put(
        `${API_URL}/${todo._id}`,
        {
          task: todo.task,
          completed: !todo.completed,
        }
      );

      setTodos((prevTodos) =>
        prevTodos.map((item) =>
          item._id === todo._id ? response.data : item
        )
      );
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  // Edit todo
  const editTodo = async (todo) => {
    const updatedTask = window.prompt(
      "Edit your task:",
      todo.task
    );

    if (updatedTask === null) {
      return;
    }

    if (!updatedTask.trim()) {
      return;
    }

    try {
      const response = await axios.put(
        `${API_URL}/${todo._id}`,
        {
          task: updatedTask.trim(),
          completed: todo.completed,
        }
      );

      setTodos((prevTodos) =>
        prevTodos.map((item) =>
          item._id === todo._id ? response.data : item
        )
      );
    } catch (error) {
      console.error("Error editing todo:", error);
    }
  };

  // Delete todo
  const deleteTodo = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await axios.delete(`${API_URL}/${id}`);

      setTodos((prevTodos) =>
        prevTodos.filter((todo) => todo._id !== id)
      );
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const totalTasks = todos.length;

  const completedTasks = todos.filter(
    (todo) => todo.completed
  ).length;

  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="app">
      <div className="todo-container">

        {/* Header */}
        <div className="header">
          <div>
            <p className="subtitle">MY TASK MANAGER</p>

            <h1>
              MERN <span>Todo</span>
            </h1>

            <p className="description">
              Organize your tasks and stay productive.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="stats">

          <div className="stat-card">
            <div className="stat-number">
              {totalTasks}
            </div>
            <div className="stat-label">
              Total
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-number pending">
              {pendingTasks}
            </div>
            <div className="stat-label">
              Pending
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-number completed">
              {completedTasks}
            </div>
            <div className="stat-label">
              Completed
            </div>
          </div>

        </div>

        {/* Add Task */}
        <TaskForm onAdd={addTodo} />

        {/* Task List */}
        <TaskList
          todos={todos}
          onToggle={toggleTodo}
          onEdit={editTodo}
          onDelete={deleteTodo}
        />

      </div>
    </div>
  );
}

export default App;