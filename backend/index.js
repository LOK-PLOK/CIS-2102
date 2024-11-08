const express = require("express");
const app = express();
app.use(express.json()); // req.body

const routes = require("./routes");

app.use("/notes", routes.notesRoutes);
app.use("/users", routes.usersRoutes);

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// any function beging calle d once the requres is recieved or before the response is sent is called middleware

// get note
// auth middleware -> getNodeConteroller -> response
