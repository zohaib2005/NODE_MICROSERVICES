const express = require("express");

const router = express.Router();

router.put(
  "/register/:servicename/:serviceversion/:serviceport",
  (req, res, next) => {
    return next("Not implemented");
  }
);

module.exports = router;
