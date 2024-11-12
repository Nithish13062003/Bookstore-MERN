const mongoose = require("mongoose");

// MongoDB URI
const MONGO_URI = 'mongodb+srv://nithishkumarnsd:Naanmudhalvan@cluster0.gm1ca.mongodb.net/Bookstore';

// Connect to MongoDB using the connection string
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connection successful");
}).catch((e) => {
  console.log("No connection: " + e);
});

module.exports = mongoose;
