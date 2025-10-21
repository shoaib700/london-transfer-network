export default function handler(req, res) {
  const { pickup, dropoff, vehicle } = req.body;
  res.status(200).json({ message: "Booking confirmed", status: "ok" });
}
