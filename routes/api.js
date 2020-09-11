//Route for main folder

const router = require("express").Router();

//Accessing the Models folder
const db = require('../../../models');

//Getting route
router.get("/", function (req, res) {
    //This route gets all workouts.

    db.workoutPlans.find({}, (err, workouts) => {
        res.json(workouts);
    });

});

router.post("/", function (req, res) {
    //This route adds a new workout into the database.

    console.log(req.body);
    console.log("req.body");

    const iExercises = req.body;

    db.workoutPlans.create({ exercises: [...iExercises] }, function (err, workout) {
        if (err) throw (err);

        res.json(workout);
    });
})

router.put("/:id", function (req, res) {
    //This route adds an exercise to an existing document.
    res.end();

})

router.delete("/:id", function (req, res) {
    //This route deletes an existing workout document.
    res.end();

})

module.exports = router;