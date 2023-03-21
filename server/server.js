const express = require("express");
//cors needed for STRIPE
const cors = require('cors')
const path = require("path");
//import apollo server
const { ApolloServer } = require("apollo-server-express");
// import typeDefs and resolvers
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");

//db connection
const db = require("./config/connection");

// const routes = require('./routes');

//express server
const app = express();
const PORT = process.env.PORT || 3001;

//needed for STRIPE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//apollo server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});

db.once("open", () => {
// start the server
server.start().then(() => {
        //apply apollo server with express app
        server.applyMiddleware({ app });

        //middleware parsing
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());

        const _dirname = path.dirname("");
        const buildPath = path.join(_dirname, "../client/build");
        app.use(express.static(buildPath));
        // if we're in production, serve client/build as static assets
        if (process.env.NODE_ENV === "production") {
        app.use(express.static(path.join(__dirname, "../client/build")));
        }

        // app.use(routes);

        //get all
        app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
        });

        app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(
            `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
        );
        });
    });
});

