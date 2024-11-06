const notes = require("../services/notesService");

const createNotesController = (req, res) => {
  const note = req.body;
  if (!note.title || !note.description) {
    return res.status(400).send("Title and description are required");
  }
  const createdNote = notes.createNote(note);
  res.status(201).json(createdNote);
};

const getNotesController = (req, res) => {
  const notesList = notes.getNotes();
  res.json(notesList);
};

const getNoteController = (req, res) => {
  const id = parseInt(req.params.id);
  const note = notes.getNote(id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).send("Note not found");
  }
};

const updateNoteController = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, description } = req.body;
  const note = notes.updateNote(id, title, description);
  if (note) {
    res.json(note);
  } else {
    res.status(404).send("Note not found");
  }
};

const deleteNoteController = (req, res) => {
  const id = parseInt(req.params.id);
  const notesList = notes.deleteNote(id);
  if (notesList) {
    res.json(notesList);
  } else {
    res.status(404).send("Note not found");
  }
};

module.exports = {
  createNotesController,
  getNotesController,
  getNoteController,
  updateNoteController,
  deleteNoteController,
};