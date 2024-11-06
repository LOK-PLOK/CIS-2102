const express = require("express");
const router = express.Router();
const notes = require("../controllers/notesController");

//creating a note
router.post("/", notes.createNotesController);

//get all notes
router.get("/", notes.getNotesController);

//get a single note
router.get("/:id", notes.getNoteController);

//update a note
router.put("/:id", notes.updateNoteController);

//deleting a note
router.delete("/:id", notes.deleteNoteController);

module.exports = router;
