import mongoose from 'mongoose';

const goalSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'] },
  isCompleted: { type: Boolean, default: false }
}, { timestamps: true });

const Goal = mongoose.model('Goal', goalSchema);
export default Goal;