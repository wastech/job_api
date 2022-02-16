const mongoose = require("mongoose");

const connectDB = (MONGO_URI) => {
  return mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true,
  });
};

module.exports = connectDB;
