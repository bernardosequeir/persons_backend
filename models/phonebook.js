const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const url = process.env.MONGODB_URI;

console.log("connecting to", url);

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

const numberSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, minlength: 3 },
  phoneNumber: { type: String, required: true, minlength: 8 },
  dateAdded: Date,
});

numberSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
numberSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Number", numberSchema);
