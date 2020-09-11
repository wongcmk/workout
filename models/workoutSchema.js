const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exercises: [
        {
            type: Object
        }
    ]
});

const WorkOut = mongoose.model("WorkOut", WorkoutSchema);

module.exports = WorkOut;