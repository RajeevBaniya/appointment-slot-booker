import { useState } from "react";
import SlotList from "./SlotList";
import AdminPanel from "./AdminPanel";
import { WORK_START, WORK_END } from "../constants/timeConstants";
import { getTimeSlots, formatDisplayTime } from "../utils/timeUtils";

export default function AppointmentBooker() {
  // Initialize with today's date
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });

  const [booked, setBooked] = useState([]);
  const [notification, setNotification] = useState({ message: "", type: "" });

  const slots = getTimeSlots();

  function showNotification(message, type = "success") {
    setNotification({ message, type });
    setTimeout(() => setNotification({ message: "", type: "" }), 3000);
  }

  function handleBook(time) {
    if (!booked.includes(time)) {
      setBooked([...booked, time]);
      showNotification(
        `✓ Appointment successfully booked for ${formatDisplayTime(time)}!`
      );
    } else {
      showNotification("This slot is already booked.", "error");
    }
  }

  function handleDateChange(e) {
    setSelectedDate(e.target.value);
    setBooked([]);
    showNotification("Showing available slots for new date.");
  }

  function handleAdminBook(time) {
    if (slots.some((slot) => slot.time === time)) {
      if (!booked.includes(time)) {
        setBooked([...booked, time]);
        showNotification(
          `Admin successfully pre-booked slot for ${formatDisplayTime(time)}`
        );
      } else {
        showNotification("This slot is already booked.", "error");
      }
    } else {
      showNotification("Invalid slot time.", "error");
    }
  }

  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-lg">
      <div className="w-full bg-[#1a1f36] text-white p-4 rounded-xl mb-6 flex items-center">
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="bg-transparent text-white text-lg font-medium focus:outline-none"
        />
      </div>

      <div className="text-[#1a1f36] mb-8">
        Available from <span className="font-medium">{WORK_START}:00 AM</span>{" "}
        to <span className="font-medium">{WORK_END}:00 PM</span>
      </div>

      {notification.message && (
        <div
          className={`mb-6 text-center font-medium py-2 px-4 rounded-lg ${
            notification.type === "error"
              ? "bg-red-50 text-red-600"
              : "bg-green-50 text-green-600"
          }`}
        >
          {notification.message}
        </div>
      )}

      <div className="space-y-8">
        <SlotList slots={slots} booked={booked} onBook={handleBook} />

        <div className="pt-4">
          <AdminPanel onAdminBook={handleAdminBook} booked={booked} />
        </div>
      </div>
    </div>
  );
}
