const { User, Trip } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('password')
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne( { email });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials')
            }
            const correctPw = await user.isCorrectPassword(password);
            if(!correctPw) {
                throw new AuthenticationError('Incorrect credentials')
            }
            const token = signToken(user);
            return { token, user };
        },
        saveTrip: async (parent, { trip }, context) => {
            if (context.user) {
                const updatedUser = await Trip.findOneAndUpdate(
                    { _id: context.trip._id },
                    { $addToSet: {savedTrips: trip} },
                    { new: true }
                )
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!')
            },
            removeTrip: async (parent, { tripId }, context) => {
                if (context.user) {
                    const updatedUser = await Trip.findOneAndUpdate(
                        {_id: context.trip._id},
                        { $pull: { savedTrip: { tripId: tripId } } },
                        { new: true }
                    )
                    return updatedUser;
                }
            }
        }   
    };

module.exports = resolvers;