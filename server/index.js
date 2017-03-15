import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress } from 'graphql-server-express';
import db from './db/neo';

const myGraphQlSchema = {};
const PORT = process.env.PORT || 3000;

var app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({schema: myGraphQlSchema}));

console.log(`AuthQL Server has started: [ PORT: ${PORT} ].`);
console.log(db);

app.listen(PORT);