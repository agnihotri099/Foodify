const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://agnihotri099:PRKOS9LRzqKHA1aE@cluster0.p9jx2ng.mongodb.net/gofoodmern?retryWrites=true&w=majority";
const mongoDB = async () => {
  await mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(async () => {
      console.log("Connected to MongoDB");
      // Your code logic after successful connection
      const fetched_data = await mongoose.connection.db.collection(
        "food_items"
      );

      fetched_data.find({}).toArray(function (err, data) {
        if (err) console.log(err);
        else console.log(data);
      });
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
      // Handle the connection error
    });
};

module.exports = mongoDB;
