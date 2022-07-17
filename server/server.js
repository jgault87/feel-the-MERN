const express = require('express');
const path = require('path');

//import apollo server
const { ApolloServer } = require('apollo-server-express');

// connection to database
const db = require('./config/connection');


// import typeDefs and resolvers
const { typeDefs, resolvers} = require('./schemas');
const {authMiddleware} = require('./utils/auth');

// const routes = require('./routes');

//express server
const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
