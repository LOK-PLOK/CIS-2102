const express = require("express");
const app = express();
app.use(express.json());

let notes = [
  {
    id: 1,
    title: "Note 1",
    description: "This is the first note",
  },
  {
    id: 2,
    title: "Note 2",
    description: "This is the second note",
  },
  {
    id: 3,
    title: "Note 3",
    description: "This is the third note",
  },
  {
    id: 4,
    title: "Note 4",
    description: "This is the fourth note",
  },
];

//get all notes
app.get("/notes", (req, res) => {
  res.json(notes);
});

//get a single note
app.get("/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const note = notes.find((note) => note.id === id);

  if (note) {
    res.json(note);
  } else {
    res.status(404).send();
  }
});

//creating a note
app.post("/notes", (req, res) => {
  const note = req.body;
  console.log(note);
  if (!note.title && !note.description) {
    res.status(400).send();
  } else {
    note.id = notes.length + 1;
    notes.push(note);
    res.status(201).json(note);
  }
});

//update a note
app.put("/notes/:id", (req, res) => {
  const id = parseInt(req.params.id) - 1;
  const note = notes.find((note) => note.id === id);
  const data = req.body;

  if (note) {
    notes[id] = { ...notes[id], ...data };
    res.status(200).send(notes[id]);
  } else {
    res.status(404).send();
  }
});

//deleting a note
app.delete("/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const note = notes.find((note) => note.id === id);

  if (note) {
    notes = notes.filter((note) => note.id !== id);
    res.json(notes);
  } else {
    res.status(404).send();
  }
});

// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log("Server is running");
});
