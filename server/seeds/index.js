const mongoose = require("mongoose");
const tripSeeds = require("./tripSeeds.json");
const userSeeds = require("./userSeeds.json");
const url = 'mongodb://localhost/travelBuddy';

mongoose.connect(process.env.MONGODB_URI || url)

const User = mongoose.model("User", {
    first_name: String,
    last_name: String,
    email: String,
    username: String,
    password: String,
});

const Trip = mongoose.model("Trip", {
    title: String,
    location: String,
    startDate: String,
    endDate: String,
    guests: Number,
    budget: Number,
    tripCost: Number
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
