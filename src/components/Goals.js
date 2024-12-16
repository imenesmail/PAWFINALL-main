import React, { useState } from "react";

function Goals() {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState("");

  const addGoal = () => {
    if (newGoal.trim()) {
      setGoals([...goals, newGoal]);
      setNewGoal("");
    }
  };

  return (
    <div className="section-goals">
      <h3 className="section-title">Goals</h3>
      <ul className="goals-list">
        {goals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
      <input
        type="text"
        className="goal-input"
        placeholder="Add a new goal..."
        value={newGoal}
        onChange={(e) => setNewGoal(e.target.value)}
      />
      <button onClick={addGoal} className="add-goal-btn">Add</button>
    </div>
  );
}

export default Goals;
