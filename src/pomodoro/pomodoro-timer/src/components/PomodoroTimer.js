import React, { useState } from "react";
import "./PomodoroTimer.css"; // Import des styles spécifiques au composant

const PomodoroTimer = () => {
  const [activeTimer, setActiveTimer] = useState("pomodoro"); // Timer actif
  const [isRunning, setIsRunning] = useState(false); // Indicateur d'exécution
  const [timeLeft, setTimeLeft] = useState(25 * 60); // Temps restant (en secondes)
  const [intervalId, setIntervalId] = useState(null); // Stocker l'identifiant de l'intervalle

  // Durées en minutes
  const durations = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 10,
  };

  // Gestion de l'affichage du timer
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Gestion de la sélection du timer
  const handleTimerSelect = (type) => {
    if (intervalId) {
      clearInterval(intervalId); // Arrêter le timer en cours
    }
    setActiveTimer(type);
    setTimeLeft(durations[type] * 60);
    setIsRunning(false); // Arrêter l'exécution
  };

  // Gestion du démarrage du timer
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);

      // Calculer l'horodatage de fin
      const endTime = Date.now() + timeLeft * 1000;

      const newIntervalId = setInterval(() => {
        const remainingTime = Math.round((endTime - Date.now()) / 1000);

        if (remainingTime <= 0) {
          clearInterval(newIntervalId);
          setIsRunning(false);
          setTimeLeft(0);
          alert("Timer terminé !");
        } else {
          setTimeLeft(remainingTime);
        }
      }, 1000);

      setIntervalId(newIntervalId);
    }
  };

  // Gestion de l'arrêt du timer
  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId); // Arrêter l'intervalle
      setIntervalId(null);

      // Mettre à jour le temps restant basé sur l'horodatage actuel
      const remainingTime = Math.round(timeLeft);
      setTimeLeft(remainingTime);
    }
    setIsRunning(false); // Mettre l'état en pause
  };

  return (
    <div className="pomodoro-container">
      <h1>Pomodoro Timer</h1>
      <div className="timer-buttons">
        <button
          className={`button ${activeTimer === "pomodoro" ? "active" : ""}`}
          onClick={() => handleTimerSelect("pomodoro")}
        >
          Pomodoro
        </button>
        <button
          className={`button ${activeTimer === "shortBreak" ? "active" : ""}`}
          onClick={() => handleTimerSelect("shortBreak")}
        >
          Short Break
        </button>
        <button
          className={`button ${activeTimer === "longBreak" ? "active" : ""}`}
          onClick={() => handleTimerSelect("longBreak")}
        >
          Long Break
        </button>
      </div>
      <div className="timer-display">
        <h2>{formatTime(timeLeft)}</h2>
      </div>
      <div className="control-buttons">
        <button className="button start" onClick={startTimer}>
          Start
        </button>
        <button className="button stop" onClick={stopTimer}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;


