const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3030;

const db = require("./models");

db.workoutPlans.deleteMany({}, (err) => {
    if (err) throw err;

    console.log("Deleted all documents");

    require("./models/seeds");
});

const app = express();

//Middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

//Handlebars

app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

app.set("view engine", "handlebars");

//Routes
app.use(require("./routes"));

console.log(PORT);

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});; 