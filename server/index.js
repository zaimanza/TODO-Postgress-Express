const express = require("express");
const app = express();
const cors = require("cors");
const client = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a todo

app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await client.query(
            "SELECT * FROM todo", (err, res) => {
                if (!err) {
                    console.log(res.rows);
                } else {
                    console.log(err.message)
                }
            }
        );

        res.json(newTodo);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log('Now browse to http://localhost:' + 5000);
});