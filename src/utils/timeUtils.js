import { WORK_START, WORK_END } from "../constants/timeConstants";

export function formatDisplayTime(time) {
  const [h, m] = time.split(":");
  const hour = parseInt(h, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 === 0 ? 12 : hour % 12;
  return `${displayHour}:${m} ${ampm}`;
}

export function getTimeSlots() {
  const slots = [];
  for (let hour = WORK_START; hour < WORK_END; hour++) {
    slots.push({ time: `${hour.toString().padStart(2, "0")}:00` });
    slots.push({ time: `${hour.toString().padStart(2, "0")}:30` });
  }
  return slots;
}

export function formatTimeForComparison(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
}

export function validateTimeInput(time, booked) {
  // Check format
  if (!/^\d{1,2}:?\d{0,2}$/.test(time)) {
    return "Please enter time in format: HH:MM";
  }

  // Parse hours and minutes, handling both "9:00" and "09:00" formats
  let [hours, minutes = "00"] = time.split(":");
  hours = parseInt(hours, 10);
  minutes = parseInt(minutes || "0", 10);

  // Validate hours and minutes
  if (
    isNaN(hours) ||
    isNaN(minutes) ||
    hours < WORK_START ||
    hours >= WORK_END ||
    minutes > 59
  ) {
    return `Please enter a time between ${WORK_START}:00 and ${WORK_END}:00`;
  }

  // Check if minutes are 00 or 30
  if (minutes !== 0 && minutes !== 30) {
    return "Please enter time in 30-minute slots (e.g., 14:00 or 14:30)";
  }

  // Format time for comparison
  const formattedTime = formatTimeForComparison(`${hours}:${minutes}`);

  // Check if slot is already booked
  if (booked.includes(formattedTime)) {
    return "This slot is already booked";
  }

  return null;
}
