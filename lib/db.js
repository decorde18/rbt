import Dexie from "dexie";

export const db = new Dexie("RBTDB");
db.version(1).stores({
  users: "++id, name, email",
  clients: "++id, firstName, lastName, school, grade",
});
