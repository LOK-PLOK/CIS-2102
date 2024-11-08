const express = require("express");
const router = express.Router();
const notes = require("../controllers/notesController");
const validateToken = require("../middlewares/auth");

//creating a note
router.post("/", validateToken, notes.createNotesController);

//get all notes
router.get("/", validateToken, notes.getNotesController);

//get a single note
router.get("/:id", validateToken, notes.getNoteController);

//update a note
router.put("/:id", validateToken, notes.updateNoteController);

//deleting a note
router.delete("/:id", validateToken, notes.deleteNoteController);

module.exports = router;