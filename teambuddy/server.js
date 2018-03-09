const express = require('express');
const expressGraphQL = require('express-graphql');

const app = express();

app.use(
  '/graphql',
  expressGraphQL({
    graphiql: true
  })
);

app.listen(4400, () => {
  console.log('Server listening on port: 4400');
});
