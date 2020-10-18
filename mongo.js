const mongoose = require("mongoose");

if (process.argv.length < 5) {
  console.log("Program usage: node mongo.js name phone-number");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb://fullstack:${password}@cluster0-shard-00-00.srgzh.gcp.mongodb.net:27017,cluster0-shard-00-01.srgzh.gcp.mongodb.net:27017,cluster0-shard-00-02.srgzh.gcp.mongodb.net:27017/phonebook?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const phonebookSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  dateAdded: Date,
});

const Number = mongoose.model("Number", phonebookSchema);

const number = new Number({
  name: process.argv[3],
  phoneNumber: process.argv[4],
  dateAdded: new Date(),
});

number.save().then((result) => {
  console.log("number saved!");
  mongoose.connection.close();
});
