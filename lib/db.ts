// import mongoose from 'mongoose';

// const MONGOOSE_URL = process.env.MONGOOSE_URL!;
// console.log("MongoDB connected");



// export async function connectDB() {
//      if (mongoose.connections[0]?.readyState === 1) 
//           return;
//      await mongoose.connect(MONGOOSE_URL);
// }


import mongoose from 'mongoose';

const MONGOOSE_URL = process.env.MONGO_URL!;

export async function connectDB(){
     if(mongoose.connection.readyState  === 1)
          return;
     await mongoose.connect(MONGOOSE_URL);
}