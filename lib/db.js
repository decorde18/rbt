import Dexie from "dexie";

export const db = new Dexie("RBTDB");

db.version(2).stores({
  // Existing Stores (No Change)
  users: "++id, name, email",
  clients: "++id, firstName, lastName, school, grade",
  clientSchedules:
    "++id, clientId, startDate, schoolStart, schoolEnd, intervalMinutes",
  behaviorDefinitions: "++id, name, abbreviation, description",

  // This allows the definition of 'Hitting' to be different for Client A vs Client B,
  // AND for the definition of 'Hitting' for Client A to change over time.
  clientBehaviorDefinitions:
    "++id, clientId, behaviorId,name, startDate, description , type",

  dataSheets: "++id, clientId, startDate, behaviors",

  trackingData: "++id, dataSheetId, dateTime, behaviorId, intervalStart, value",
});
