const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost", // Database host
  user: "root", // Database username
  password: "", // Database password (leave empty if no password)
  database: "daisytodo", // Database name
  port: 3306,
});

pool.getConnection()
  .then(() => console.log("Connected to MySQL database"))
  .catch((err) => {
    console.error("Failed to connect to MySQL:", err);
    process.exit(1);
  });

module.exports = pool;
