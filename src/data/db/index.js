import Dexie from "dexie";

export const db = new Dexie("listDb");
db.version(1).stores({
  notes: "++id, time, text",
});

export const removeNote = async (id) => {
  await db.notes.delete(id);
};

export const addNote = async (data) => {
  await db.notes.add({ time: Date.now(), text: data });
};

export const updateNote = async (data, id) => {
  await db.notes.update(id, { time: Date.now(), text: data });
};
