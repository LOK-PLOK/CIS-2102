let notes = [
  // {
  //   id: 1,
  //   title: "Note 1",
  //   description: "This is the first note",
  // },
  // {
  //   id: 2,
  //   title: "Note 2",
  //   description: "This is the second note",
  // },
  // {
  //   id: 3,
  //   title: "Note 3",
  //   description: "This is the third note",
  // },
  // {
  //   id: 4,
  //   title: "Note 4",
  //   description: "This is the fourth note",
  // },
];

const createNote = (note) => {
  note.id = notes.length ? notes[notes.length - 1].id + 1 : 1;
  notes.push(note);
  return note;
};

const getNotes = () => {
  return notes;
};

const getNote = (id) => {
  const note = findNote(id);
  return note;
};

const updateNote = (id, title, description) => {
  const note = findNote(id);
  if (!note) return null;

  note.title = title;
  note.description = description;
  return note;
};

const deleteNote = (id) => {
  const note = findNote(id);

  if (note) {
    notes = notes.filter((note) => note.id !== id);
    return notes;
  } else {
    return null;
  }
};

const findNote = (id) => {
  const note = notes.find((note) => note.id === id);
  return note;
};

module.exports = {
  createNote,
  getNotes,
  getNote,
  updateNote,
  deleteNote,
};