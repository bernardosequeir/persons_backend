require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const Number = require("./models/phonebook");

//Morgan token from logging, displays an object's
//value when a post request is made, to help debugging
morgan.token("body", function (req) {
  if (req.method !== "POST") {
    return " ";
  }
  return JSON.stringify(req.body);
});

app.use(express.static("build"));
app.use(express.json());
app.use(cors());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

app.get("/api/persons", (request, response) => {
  Number.find({}).then((numbers) => {
    response.json(numbers);
  });
});

app.get("/api/persons/:id", (request, response) => {
  Number.findById(request.params.id)
    .then((person) => {
      if (person) {
        response.json(person);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => {
      next(error);
    });
});

app.get("/info", (request, response) => {
  response.send(`<p>Phonebook has info for ${persons.length} people</p>
  <p>${new Date()}</p>`);
});

app.post("/api/persons", (request, response, next) => {
  const body = request.body;
  const person = new Number({
    name: body.name,
    phoneNumber: body.phoneNumber,
    dateAdded: new Date(),
  });
  person
    .save()
    .then((savedPerson) => savedPerson.toJSON())
    .then((savedAndFormattedPerson) => {
      response.json(savedAndFormattedPerson);
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

app.delete("/api/persons/:id", (request, response, next) => {
  Number.findByIdAndDelete(request.params.id)
    .then(() => response.status(204).end())
    .catch((error) => {
      next(error);
    });
});

app.put("/api/persons/:id", (request, response, next) => {
  const { name, phoneNumber } = request.body;
  const number = {
    name,
    phoneNumber,
  };
  Number.findByIdAndUpdate(request.params.id, number, { new: true })
    .then((updateNumber) => response.json(updateNumber))
    .catch((error) => {
      next(error);
    });
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
  console.log(error.message);

  if (error.name === "CastError") {
    return response.status(400).json({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }
  next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
