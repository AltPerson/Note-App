import Dexie from "dexie";

export const db = new Dexie("listDb");
db.version(1).stores({
  notes: "++id,text",
});

export const removeNote = async (id) => {
  await db.notes.delete(id);
};

export const addNote = async (data) => {
  await db.notes.add({ date: Date.now(), text: data });
};

export const updateNote = async (data, id, time) => {
  await db.notes.update(id, { date: time, text: data });
};
