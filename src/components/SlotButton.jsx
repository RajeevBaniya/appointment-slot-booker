import { formatDisplayTime } from "../utils/timeUtils";

export default function SlotButton({ time, booked, onBook }) {
  return (
    <button
      className={`w-full py-2 px-4 rounded-lg text-center transition-colors
        ${
          booked
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-[#4f46e5] text-white hover:bg-[#4338ca]"
        }`}
      onClick={() => !booked && onBook(time)}
      disabled={booked}
    >
      {formatDisplayTime(time)}
      {booked && " (Booked)"}
    </button>
  );
}
