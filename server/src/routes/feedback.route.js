const express = require("express");
const { getFeedback, postFeedback, updateFeedback, deleteFeedback } = require("../Controllers/feedback.controller");

const feedbackRoute = express.Router();

feedbackRoute.get("/", getFeedback);
feedbackRoute.post("/create", postFeedback);
feedbackRoute.put("/update/:feedbackId", updateFeedback);
feedbackRoute.delete("/delete/:feedbackId", deleteFeedback);


module.exports = {feedbackRoute}