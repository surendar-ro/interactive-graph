import mongoose from "mongoose";

const ToolSchema = new mongoose.Schema({
  name: String,
  input: String,
  output: String,
  idx: String,
});

const AgentSchema = new mongoose.Schema({
  name: String,
  tools: [ToolSchema],
  images: [String],
  output: String,
  idx: String,
});

const AttackDataSchema = new mongoose.Schema({
  timestamp: Date,
  idx: String,
  query: String,
  agents: [AgentSchema],
  response: String,
  total_tokens: Number,
  is_active: Boolean,
});

export default mongoose.models.AttackData || mongoose.model("AttackData", AttackDataSchema);
