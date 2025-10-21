export default function handler(req, res) {
  const { pickup, dropoff, vehicle } = req.body;
  const baseFare = 5;
  const perMile = vehicle === "executive" ? 3 : 2;
  const distance = 10; // Simulated
  const total = baseFare + distance * perMile;
  res.status(200).json({ fare: total });
}
