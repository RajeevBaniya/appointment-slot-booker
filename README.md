# Appointment Slot Booker

A React-based appointment booking system that allows users to book 30-minute slots for a single day.

## Features

- **30-minute slot booking**: Book appointments in 30-minute intervals
- **Working hours**: 9:00 AM to 5:00 PM
- **Date selection**: Choose different dates for booking
- **Real-time availability**: Instant updates on slot availability
- **Admin panel**: Pre-book slots through admin interface
- **Responsive design**: Works on both desktop and mobile devices
- **Visual feedback**: Clear success/error notifications

## Tech Stack

- React
- TailwindCSS
- Vite

## Project Structure

```
src/
├── constants/
│   └── timeConstants.js       # Time-related constants
├── utils/
│   └── timeUtils.js          # Time-related utility functions
├── components/
│   ├── AppointmentBooker.jsx # Main component
│   ├── AdminPanel.jsx        # Admin booking interface
│   ├── SlotList.jsx         # List of time slots
│   └── SlotButton.jsx       # Individual slot button
├── App.jsx
└── main.jsx
```

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd appointement-booker
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the URL shown in the terminal (typically http://localhost:5173)

## Usage

### User Booking

1. Select a date using the date picker
2. View available 30-minute slots
3. Click on an available slot (blue) to book it
4. Receive confirmation message upon successful booking

### Admin Pre-booking

1. Locate the admin input field at the bottom
2. Enter time in HH:MM format (e.g., "14:00" for 2:00 PM)
3. Click "Book" to pre-book the slot
4. Receive confirmation or error message

## Features in Detail

### Time Slots

- Slots are generated in 30-minute intervals
- Each slot shows either as available (blue) or booked (gray)
- Booked slots are disabled and show "(Booked)" status

### Date Selection

- Date picker allows selecting different days
- Selecting a new date resets all bookings
- Shows notification when changing dates

### Admin Panel

- Input validation for correct time format
- Checks for valid working hours (9 AM - 5 PM)
- Prevents booking already booked slots
- Clear error messages for invalid inputs

### Notifications

- Success messages for successful bookings
- Error messages for invalid actions
- Temporary notifications that auto-dismiss
