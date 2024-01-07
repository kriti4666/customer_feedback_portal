const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  feedback: { type: String, required: true },
  date: { type: Date, default: Date.now },
  user : {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    email: { type: String, required: true },
    role: { type: String, required: true }
  }
});

const FeedbackModel = mongoose.model("feedback", feedbackSchema);

module.exports = FeedbackModel;
