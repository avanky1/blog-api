import mongoose from 'mongoose';

const MONGOOSE_URL = process.env.MONGOOSE_URL!;


export async function connectDB() {
     if (mongoose.connections[0]?.readyState === 1) 
          return;
     await mongoose.connect(MONGOOSE_URL);
}
