// components/property/BookingSection.tsx
import React, { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const totalNights = checkIn && checkOut ? (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000*60*60*24) : 1;
  const totalPayment = price * totalNights;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">${price}/night</h3>

      <div className="mt-4">
        <label>Check-in</label>
        <input type="date" className="border p-2 w-full mt-2" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
      </div>

      <div className="mt-4">
        <label>Check-out</label>
        <input type="date" className="border p-2 w-full mt-2" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
      </div>

      <div className="mt-4">
        <p>Total payment: <strong>${totalPayment}</strong></p>
      </div>

      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md w-full">Reserve now</button>
    </div>
  );
};

export default BookingSection;
