const { Client } = require("pg");

const client = new Client({
    user: "postgres",
    password: "2862",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

client.connect()

module.exports = client;