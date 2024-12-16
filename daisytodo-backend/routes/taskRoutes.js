const express = require("express");
const {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController"); // Le contrôleur des tâches

const router = express.Router();

// Routes pour les tâches
router.get("/", getTasks); // Récupérer toutes les tâches
router.post("/", addTask); // Ajouter une tâche
router.put("/:id", updateTask); // Mettre à jour une tâche
router.delete("/:id", deleteTask); // Supprimer une tâche

module.exports = router;
