const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createNote = async (note, userId) => {
  const newNote = await prisma.note.create({
    data: {
      title: note.title,
      description: note.description,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
  return newNote;
};

const getNotes = async (userId) => {
  const notes = await prisma.note.findMany({
    where: {
      user: userId,
    },
  });
  return notes;
};

const getNote = async (id, userId) => {
  const note = await findNote(id, userId);
  return note;
};

const updateNote = async (id, title, description, userId) => {
  const note = await findNote(id, userId);
  if (!note) return null;

  const updatedNote = await prisma.note.update({
    where: {
      id: id,
      user: userId,
    },
    data: {
      title: title,
      description: description,
    },
  });

  return updatedNote;
};

const deleteNote = async (id, userId) => {
  const note = await findNote(id, userId);

  if (!note) return null;

  const deletedNote = await prisma.note.delete({
    where: {
      id: id,
      user: userId,
    },
  });

  return deletedNote;
};

const findNote = async (id, userId) => {
  const note = await prisma.note.findUnique({
    where: {
      id: id,
      user: userId,
    },
  });

  return note;
};

module.exports = {
  createNote,
  getNotes,
  getNote,
  updateNote,
  deleteNote,
};
