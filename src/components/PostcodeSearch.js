import React, { useState } from "react";

function PostcodeSearch() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  return (
    <div className="mb-4 max-w-md mx-auto">
      <input
        className="w-full p-2 mb-2 border rounded"
        placeholder="Pickup Postcode"
        value={pickup}
        onChange={(e) => setPickup(e.target.value)}
      />
      <input
        className="w-full p-2 border rounded"
        placeholder="Drop-off Postcode"
        value={dropoff}
        onChange={(e) => setDropoff(e.target.value)}
      />
    </div>
  );
}

export default PostcodeSearch;
