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

const createManyPeople = (arrayOfPeople, done) => {
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

    Person.create(arrayOfPeople);
    done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
    done(null /*, data*/);
};

const findOneByFood = (food, done) => {
    done(null /*, data*/);
};

const findPersonById = (personId, done) => {
    done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
    const foodToAdd = "hamburger";

    done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
    const ageToSet = 20;

    done(null /*, data*/);
};

const removeById = (personId, done) => {
    done(null /*, data*/);
};

const removeManyPeople = (done) => {
    const nameToRemove = "Mary";

    done(null /*, data*/);
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
