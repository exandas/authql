import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress } from 'graphql-server-express';

const myGraphQlSchema = {};
const PORT = process.env.PORT || 3000;

var app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({schema: myGraphQlSchema}));

console.log(`AuthQL Server has started: [ PORT: ${PORT} ].`);

app.listen(PORT);