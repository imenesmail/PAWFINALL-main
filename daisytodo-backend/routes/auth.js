const express = require("express");
const { register, login } = require("../controllers/authController");

const router = express.Router();

router.post("/register", register); // Pour l'enregistrement
router.post("/login", login);       // Pour la connexion

module.exports = router;
