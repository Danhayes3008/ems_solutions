const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//  middleware
app.use(cors());
app.use(express.json()); // allows us to use req.body

// ROUTES

// get all employee's from the employee table
app.get("/employees", async (req, res) => {
  try {
    const allEmployees = await pool.query("SELECT * FROM employee");
    res.json(allEmployees.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/forcasting", async (req, res) => {
  try {
    const Forcasting = await pool.query("SELECT week_start, EXTRACT('yyyymmdd', week_start), week_end FROM forcasting");
    res.json(Forcasting.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// this prints a message to the console when the server starts
app.listen(5000, () => {
    console.log("server has started on port 5000");
})