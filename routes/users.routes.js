const express = require("express");
const userControllers = require("../controllers/users.controllers")
const router =  express.Router();

router.get("/", userControllers.getAllUsers);

router.post("/", userControllers.addUsers);

router.patch("/:id", userControllers.updateUsers);

router.delete("/:id", userControllers.deleteUsers);

module.exports = router;