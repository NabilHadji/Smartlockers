const express = require("express");
const router = express.Router();

router.get("/testf", (req, res) => {
    res.send("GET request to the homepage");
});

router.put("/:id");

module.exports = router;