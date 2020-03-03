const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.selectAll(result => {
    const hbsObject = { burgers: result };
    // res.json(result);
    res.render("index", hbsObject);
  });
});

router.post("/api/add", (req, res) => {
  burger.insertOne(req.body, result => {
    // Send back the ID of the new quote
    res.json(result);
  });
});

router.put("/api/update/:id", (req, res) => {
  burger.updateOne({ devoured: true }, req.params.id, result => {
    res.json(result);
  });
});

// Export routes for server.js to use.
module.exports = router;
