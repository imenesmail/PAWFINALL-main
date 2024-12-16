import React from "react";

function TaskList({ tasks, onRemoveTask, onUpdateTask }) {
  return (
    <div className="task-list">
      <h3>My Tasks</h3>
      <ul>
        {tasks.map((item) => (
          <li key={item.id}>
            <div className="task-details">
              {/* Checkbox to mark task as complete */}
              <input
                type="checkbox"
                onClick={() => onRemoveTask(item.id)}
              />
              {/* Input to edit task title */}
              <input
                type="text"
                value={item.title}
                onChange={(e) =>
                  onUpdateTask(item.id, { ...item, title: e.target.value })
                }
              />
              {/* Priority display */}
              <span className={`priority ${item.priority?.toLowerCase()}`}>
                {item.priority}
              </span>
              {/* Deadline display */}
              <span className="deadline">{item.deadline}</span>
              {/* Button to remove task */}
              <button
                onClick={() => onRemoveTask(item.id)}
                className="remove-task-button"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
