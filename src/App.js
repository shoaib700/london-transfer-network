import React from 'react';
import PostcodeSearch from './components/PostcodeSearch';
import VehicleSelector from './components/VehicleSelector';
import FareCalculator from './components/FareCalculator';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">London Transfer Network</h1>
      <PostcodeSearch />
      <VehicleSelector />
      <FareCalculator />
    </div>
  );
}

export default App;
