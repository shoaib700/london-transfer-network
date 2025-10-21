import React, { useState } from "react";

function VehicleSelector() {
  const [vehicle, setVehicle] = useState("");

  return (
    <div className="mb-4 max-w-md mx-auto">
      <select
        className="w-full p-2 border rounded"
        value={vehicle}
        onChange={(e) => setVehicle(e.target.value)}
      >
        <option value="">Select Vehicle Type</option>
        <option value="4-seater">4-Seater</option>
        <option value="7-seater">7-Seater</option>
        <option value="executive">Executive</option>
        <option value="8-seater">8-Seater</option>
      </select>
    </div>
  );
}

export default VehicleSelector;
