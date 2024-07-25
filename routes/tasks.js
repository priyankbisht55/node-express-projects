import express from "express";
const router = express.Router();

const {getAllTasks} = require("../controllers/tasks");

router.route('/').get(getAllTasks);

module.exports = router;