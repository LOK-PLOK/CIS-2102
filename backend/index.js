const express = require("express");
const app = express();
app.use(express.json()); // req.body

const routes = require('./routes');

app.use("/notes", routes.notesRoutes);

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log("Server is running");
});



//Users
//Notes
//Settings
//Chats

/**
 * Objectives:
 *  -Refactoring the API by seperating the routes and the server
 *  -Integrating a database using prisma , sqlite
 *  -middlewares
 * 
 * index.js-> routes -> controllers -> services
*/

// let notes = [
//   // {
//   //   id: 1,
//   //   title: "Note 1",
//   //   description: "This is the first note",
//   // },
//   // {
//   //   id: 2,
//   //   title: "Note 2",
//   //   description: "This is the second note",
//   // },
//   // {
//   //   id: 3,
//   //   title: "Note 3",
//   //   description: "This is the third note",
//   // },
//   // {
//   //   id: 4,
//   //   title: "Note 4",
//   //   description: "This is the fourth note",
//   // },
// ];