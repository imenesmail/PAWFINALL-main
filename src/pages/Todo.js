import React, { useEffect, useState } from "react";
import AddTask from "../components/AddTask";
import Goals from "../components/Goals";
import Notes from "../components/Notes";
import Reminders from "../components/Reminders";
import Sidebar from "../components/Sidebar";
import TaskList from "../components/TaskList";
import API_URL from "../config";

import "../App.css";

function Todo() {
  const [tasks, setTasks] = useState([]);

  // Fonction pour récupérer les tâches
  const fetchTasks = async () => {
    try {
      const response = await fetch(`${API_URL}/api/tasks`);
      if (!response.ok) {
        throw new Error(`Failed to fetch tasks: ${response.statusText}`);
      }
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error.message);
    }
  };

  // Fonction pour ajouter une tâche
  const addTask = async (task) => {
    try {
      const response = await fetch(`${API_URL}/api/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      });
      if (!response.ok) {
        throw new Error("Failed to add task");
      }
      const newTask = await response.json();
      setTasks((prev) => [...prev, newTask]); // Ajout dans l'état local
    } catch (error) {
      console.error("Error adding task:", error.message);
    }
  };

  // Fonction pour supprimer une tâche
  const removeTask = async (id) => {
    try {
      const response = await fetch(`${API_URL}/api/tasks/${id}`, { method: "DELETE" });
      if (!response.ok) {
        throw new Error("Failed to delete task");
      }
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error.message);
    }
  };

  // Fonction pour mettre à jour une tâche
  const updateTask = async (id, updatedTask) => {
    try {
      const response = await fetch(`${API_URL}/api/tasks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
      });
      if (!response.ok) {
        throw new Error("Failed to update task");
      }
      const data = await response.json();
      setTasks((prev) =>
        prev.map((task) => (task.id === id ? { ...task, ...data } : task))
      );
    } catch (error) {
      console.error("Error updating task:", error.message);
    }
  };

  // Récupérer les tâches à la première montée du composant
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <Sidebar />
      <div className="content">
        <div className="partieAdd">
          <AddTask
            onAddTask={(task) =>
              addTask({ title: task.task, description: task.priority, deadline: task.deadline })
            }
          />
        </div>
        <div className="listeT">
          <TaskList
            tasks={tasks}
            onRemoveTask={removeTask}
            onUpdateTask={(id, updatedTask) =>
              updateTask(id, { title: updatedTask.task, description: updatedTask.priority, deadline: updatedTask.deadline })
            }
          />
        </div>
        <div className="sections-container">
          <Goals />
          <Reminders />
          <Notes />
        </div>
      </div>
    </>
  );
}

export default Todo;
