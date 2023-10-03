require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
    console.log("MongoDB connected successfully");
});

mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error: " + err);
});

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
});

const Schema = mongoose.Schema;
const personSchema = new Schema({
    name: { type: String, required: true },
    age: Number,
    favoriteFoods: [String],
});

// let Person;
const Person = mongoose.model("Person", personSchema);

var createAndSavePerson = function (done) {
    var LaibaAtique = new Person({
        name: "Laiba Atique",
        age: 84,
        favoriteFoods: ["eggs", "fish", "fresh fruit"],
    });

    LaibaAtique.save(function (err, data) {
        if (err) return console.error(err);
        done(null, data);
    });
};

let arrayOfPeople = [
    {
        name: "rayyan Atique",
        age: 84,
        favoriteFoods: ["eggs", "fish", "fresh fruit"],
    },
    {
        name: "wajahat Atique",
        age: 84,
        favoriteFoods: ["eggs", "fish", "fresh fruit"],
    },
];

const createManyPeople = (arrayOfPeople, done) => {
    Person.create(arrayOfPeople, function (err, people) {
        if (err) return console.log(err);
        done(null, people);
    });
};

const findPeopleByName = (personName, done) => {
    Person.find({ name: personName }, function (err, people) {
        if (err) return console.log(err);
        done(null, people);
    });
};

const findOneByFood = (food, done) => {
    Person.findOne({ favoriteFoods: food }, function (err, people) {
        if (err) return console.log(err);
        done(null, people);
    });
};

const findPersonById = function (personId, done) {
    Person.findById(personId, function (err, data) {
        if (err) return console.log(err);
        done(null, data);
    });
};

const findEditThenSave = (personId, done) => {
    const foodToAdd = "hamburger";

    // Find the person by ID
    Person.findById(personId, function (err, person) {
        if (err) {
            return done(err);
        }

        // Update the person's favorite foods
        person.favoriteFoods.push(foodToAdd);

        // Save the updated person
        person.save(function (err, updatedPerson) {
            if (err) {
                return done(err);
            }

            done(null, updatedPerson);
        });
    });
};

const findAndUpdate = (personName, done) => {
    Person.findOneAndUpdate(
        { name: personName },
        { age: 20 },
        { new: true },
        function (err, updatedPerson) {
            if (err) return console.error(err);

            done(null, updatedPerson);
        }
    );
};

const removeById = (personId, done) => {
    Person.findByIdAndRemove(personId, (err, removedDoc) => {
        if (err) return console.log(err);
        done(null, removedDoc);
    });
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  
  // Remove all people with the name "Mary"
  Person.remove({ name: nameToRemove }, (err, removedDoc) => {
      if (err) return console.log(err);
      done(null, removedDoc);
  });
};

const queryChain = (done) => {
    const foodToSearch = "burrito";

    done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
