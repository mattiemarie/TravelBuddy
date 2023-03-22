const mongoose = require("mongoose");
const tripSeeds = require("./tripSeeds.json");
const userSeeds = require("./userSeeds.json");

mongoose.connect("mongodb://localhost/travelBuddy");

const User = mongoose.model("User", {
    name: String,
    email: String,
    password: String,
});

const Trip = mongoose.model("Trip", {
    name: String,
    description: String,
    price: Number,
});

async function seedData() {
  // Seed users
    for (const userData of userSeeds) {
        const user = new User(userData);
        await user.save();
    }

    // Seed trips
    for (const tripData of tripSeeds) {
        const trip = new Trip(tripData);
        await trip.save();
    }

    console.log("Seeding complete");
    mongoose.disconnect();
}

seedData();
