const notes = require("../services/notesService");

const createNotesController = async (req, res) => {
  const note = req.body;
  const user = req.user;
  if (!note.title || !note.description) {
    return res.status(400).send("Title and description are required");
  }
  const createdNote = await notes.createNote(note,user.id);
  res.status(201).json(createdNote);
};

const getNotesController = async (req, res) => {
  const user = req.user;
  const notesList = await notes.getNotes(user.id);
  res.json(notesList);
};

const getNoteController = async (req, res) => {
  const user = req.user;
  const id = parseInt(req.params.id);
  const note = await notes.getNote(id, user.id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).send("Note not found");
  }
};

const updateNoteController = async (req, res) => {
  const user = req.user;
  const id = parseInt(req.params.id);
  const { title, description } = req.body;
  const note = await notes.updateNote(id, title, description, user.id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).send("Note not found");
  }
};

const deleteNoteController = async (req, res) => {
  const user = req.user;
  const id = parseInt(req.params.id);
  const notesList = await notes.deleteNote(id, user.id);
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