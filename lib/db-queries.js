import { db } from "./db";

/**
 * Retrieves the school schedule configuration for a client on a specific date.
 * @param {number} clientId - The ID of the client.
 * @param {Date} trackingDate - The specific date you are interested in.
 * @returns {Promise<Object>} A promise that resolves to the active schedule object.
 */
export async function getClientSchedule(clientId, trackingDate) {
  // 1. Convert the tracking date to a standard format for comparison (e.g., just the date at midnight).
  const queryDate = new Date(trackingDate.setHours(0, 0, 0, 0));

  // 2. Query the clientSchedules store.
  // .where('clientId').equals(clientId) filters for the specific client.
  // .filter(record => record.startDate <= queryDate) finds all schedules active BEFORE or ON the trackingDate.
  // .sortBy('startDate') sorts them chronologically.
  // The last item in the sorted array is the LATEST active schedule.
  const queryDateObj = new Date(queryDate);

  const allSchedules = await db.clientSchedules.toArray();
  const schedules = allSchedules
    .filter(
      (record) =>
        record.clientId == clientId &&
        new Date(record.startDate) <= queryDateObj
    )
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

  // 3. Return the last (most recent) schedule configuration.
  if (schedules.length === 0) {
    return new Error(
      `No schedule found for client ID ${clientId} on or before ${
        trackingDate.toISOString().split("T")[0]
      }.`
    );
  }

  return schedules[schedules.length - 1];
}

// Example Usage:
// const activeSchedule = await getClientSchedule(1, new Date('2025-10-07'));

/*
// activeSchedule will look like this:
{
    id: 42,
    clientId: 1,
    startDate: new Date('2025-09-01T00:00:00Z'), // The day this schedule started
    schoolStart: "08:00",
    schoolEnd: "15:30",
    intervalMinutes: 15
}
*/
/**
 * Retrieves the behaviors and tracking types defined for a client on a specific date.
 */
export async function getClientBehaviors(clientId) {
  const behaviors = await db.clientBehaviorDefinitions
    .where("clientId")
    .equals(clientId)
    .toArray();

  if (behaviors.length === 0) {
    throw new Error(`No behaviors found for client ID ${clientId}      }.`);
  }

  // The last sheet is the currently active one
  return behaviors;
}
export async function getClientDataSheets(clientId) {
  const sheets = await db.dataSheets
    .where("clientId")
    .equals(clientId)
    .sortBy("startDate");
  if (sheets.length === 0) {
    throw new Error(`No data sheet found for client ID ${clientId}      }.`);
  }

  // The last sheet is the currently active one
  return sheets;
}
export async function getActiveDataSheet(clientId) {
  const sheets = await db.dataSheets
    .where("clientId")
    .equals(clientId)
    .sortBy("startDate");

  if (sheets.length === 0) {
    throw new Error(
      `No data sheet found for client ID ${clientId}
      }.`
    );
  }

  // The last sheet is the currently active one
  return sheets[sheets.length - 1];
}

/**
 * Retrieves all recorded data points for a single time interval.
 */
export async function getIntervalData(clientId, intervalStart) {
  // intervalStart is the unique identifier for the time block (e.g., 8:00 AM on a specific date).
  return db.trackingData
    .where({
      clientId: clientId,
      intervalStart: intervalStart,
    })
    .toArray();
}
/**
 * Logs a new behavior data point.
 * @param {Object} data - Contains clientId, dateTime, behaviorId, intervalStart, value, etc.
 */
export async function logBehavior(data) {
  // Dexie's .put() handles both inserts (if no primary key) and updates (if primary key exists).
  // Use .add() for explicit insert, but .put() is versatile.
  return db.trackingData.add(data);
}
/**
 * Retrieves all recorded data points for a specific client on a given day.
 */
export async function getAllTrackingDataForDay(clientId, trackingDate) {
  const startOfDay = new Date(trackingDate);
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date(trackingDate);
  endOfDay.setHours(23, 59, 59, 999);

  return db.trackingData
    .where("clientId")
    .equals(clientId)
    .and((item) => item.dateTime >= startOfDay && item.dateTime <= endOfDay)
    .toArray();
}
