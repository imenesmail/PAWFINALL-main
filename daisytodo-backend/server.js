const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth"); // Routes pour l'authentification
const taskRoutes = require("./routes/taskRoutes"); // Routes pour les tâches

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes); // Authentification
app.use("/api/tasks", taskRoutes); // Tâches

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
