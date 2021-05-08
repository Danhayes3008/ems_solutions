const express = require("express");
const app = express();
const cors = require("cors");

//  middleware
app.use(cors());
app.use(express.json()); // allows us to use req.body

// ROUTES

// get all employee's from the employee table
app.get("/employee/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const todo = await pool.query("SELECT * FROM employee WHERE id = $1", [
        id
      ]);

      res.json(todo.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });

// this prints a message to the console when the server starts
app.listen(5000, () => {
    console.log("server has started on port 5000");
})