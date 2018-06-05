const express = require('express');
const expressGraphQL = require('express-graphql');

const app = express();

app.use('/graphql', expressGraphQL({
  graphiql: true,
}));

app.listen(8007, () => console.log('listening on 8007'));