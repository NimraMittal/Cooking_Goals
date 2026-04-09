import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // This looks for the MONGODB_URI in your .env file
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/cooking-goals';
    
    await mongoose.connect(mongoURI);
    
    console.log('✅ MongoDB connected successfully');
    
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1); // Stop the server if the database fails
  }
};

export default connectDB;