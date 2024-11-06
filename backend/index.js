const express = require("express");
const app = express();
app.use(express.json()); // req.body

const routes = require('./routes');

app.use("/notes", routes.notesRoutes);

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log("Server is running");
});