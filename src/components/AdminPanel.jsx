import { useState } from "react";
import { validateTimeInput, formatTimeForComparison } from "../utils/timeUtils";

export default function AdminPanel({ onAdminBook, booked }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  function handleBook() {
    const errorMessage = validateTimeInput(input, booked);
    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    // Format the time before booking
    const [hours, minutes = "00"] = input.split(":");
    const formattedTime = formatTimeForComparison(`${hours}:${minutes}`);

    setError("");
    onAdminBook(formattedTime);
    setInput("");
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2 max-w-lg">
        <input
          type="text"
          placeholder="e.g. 14:00"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError("");
          }}
          className="w-full bg-[#1a1f36] text-white px-4 py-2 rounded-lg focus:outline-none"
        />
        <button
          onClick={handleBook}
          className="bg-[#1a1f36] text-white px-8 py-2 rounded-lg hover:bg-[#2a3246] whitespace-nowrap"
        >
          Book
        </button>
      </div>
      <div className="min-h-[20px]">
        {error && <div className="text-red-600 text-sm">{error}</div>}
      </div>
    </div>
  );
}
