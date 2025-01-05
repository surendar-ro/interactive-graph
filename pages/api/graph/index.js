import connectMongo from "../../../lib/mongodb";
import AttackData from "../../../models/AttackData";

export default async function handler(req, res) {
  await connectMongo();

  if (req.method === "GET") {
    try {
      const data = await AttackData.find();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ error: "Error fetching data" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
