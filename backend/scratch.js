import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(process.env.MONGODB_URI).then(async () => {
  const db = mongoose.connection.useDb('test'); // default is test unless specified in URI
  const foods = await mongoose.connection.db.collection('foods').find({}).toArray();
  console.log(JSON.stringify(foods, null, 2));
  mongoose.disconnect();
}).catch(console.error);
