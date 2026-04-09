import User from '../models/User.js';
import bcrypt from 'bcrypt';

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, skillLevel } = req.body;

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User
    const user = await User.create({
      name, email, password: hashedPassword, skillLevel
    });

    res.status(201).json({ success: true, data: { id: user._id, name: user.name } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add getAllUsers, getUserById, updateUser, and deleteUser as per your Unit notes...