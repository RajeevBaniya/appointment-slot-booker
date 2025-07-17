import SlotButton from "./SlotButton";

export default function SlotList({ slots, booked, onBook }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-8 gap-4">
      {slots.map((slot) => (
        <SlotButton
          key={slot.time}
          time={slot.time}
          booked={booked.includes(slot.time)}
          onBook={onBook}
        />
      ))}
    </div>
  );
}
