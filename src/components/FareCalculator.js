import React from "react";

function FareCalculator() {
  const handleBook = () => {
    alert("Booking Submitted (Simulated)");
  };

  return (
    <div className="max-w-md mx-auto">
      <button
        className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={handleBook}
      >
        Book Now
      </button>
    </div>
  );
}

export default FareCalculator;
