const neo4j = require('neo4j');


const db = new neo4j.GraphDatabase(`http://${process.env.NEO4J_USER}:${process.env.NEO4J_PASSWORD}@localhost:7474`);
console.log('I am here 1');

// MATCH (people:Person) RETURN people.name LIMIT 10
db.cypher({
    query: 'MATCH (people:Person) RETURN people.name LIMIT 10',
    params: {}
}, (err, results) => {
    if(err) console.log('error was', err);
    else {
        const result = results[0];
        console.log('result was', result);
    }
})

export default db;