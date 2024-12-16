import axios from "axios";
import React, { useState } from "react";
import API_URL from "../config"; // URL du backend

function AddTask({ onAddTask }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Low");
  const [deadline, setDeadline] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!task.trim()) {
      setError("Task title cannot be empty.");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/api/tasks`, {
        title: task, // Correspond au champ "title" dans la table
        description: priority, // Enregistre la priorité comme description
        deadline: deadline || null, // Si aucune date limite, envoyer "null"
      });

      onAddTask(response.data); // Ajouter la tâche à la liste
      setTask("");
      setPriority("Low");
      setDeadline("");
      setError(null); // Réinitialiser les erreurs
    } catch (err) {
      console.error("Error adding task:", err.message);
      setError("Failed to add task. Please try again.");
    }
  };

  return (
    <div className="add-task">
      <h3 className="minititles">Add a Task</h3>
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Affiche les erreurs */}
      <form onSubmit={handleSubmit}>
        <div className="inputcontainer">
          <input
            className="input"
            type="text"
            placeholder="Task title"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <input
            className="dateInput"
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>
        <div className="priority-buttons">
          <button
            type="button"
            className={priority === "High" ? "active" : ""}
            onClick={() => setPriority("High")}
          >
            High
          </button>
          <button
            type="button"
            className={priority === "Medium" ? "active" : ""}
            onClick={() => setPriority("Medium")}
          >
            Medium
          </button>
          <button
            type="button"
            className={priority === "Low" ? "active" : ""}
            onClick={() => setPriority("Low")}
          >
            Low
          </button>
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
