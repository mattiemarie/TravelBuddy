const { gql } = require('apollo-server-express');

// typeDefs
const typeDefs = gql`
    type Trip {
        _id: ID
        title: String
        traveler: [User]
        fromlocation: String
        tolocation: String
        startdate: String
        enddate: String
        flight: String
        hotel: String
        guests: Int
        budget: Number
        tripcost: Number
    }
    type User {
        _id: ID
        username: String
        email: String
        trip: [Trip]
    }
    type Query {
        me: User
    }
    type Auth {
    token: ID!
    user: User
    }
    input SavedTripInput {
        Travelers: [User]
        Name: String
        City: String
        Hotel: String
        Flight: String
        Budget: Number
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveTrip(trip: SavedTripInput): User
        removeTrip(tripId: String!): User
}
`;

// export the typeDefs
module.exports = typeDefs;