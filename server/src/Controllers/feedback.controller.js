const FeedbackModel = require("../models/feedback.model");

const getFeedback = async (req, res) => {
  try {
    let feedback;
    if (req.user.role === "Admin") {
      feedback = await FeedbackModel.find();
    } else {
      feedback = await FeedbackModel.find({ 'user.userId': req.user.userId });
    }
    return res.status(200).json({ result: feedback });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const postFeedback = async (req, res) => {
  const { customerName, feedback } = req.body;
  const { userId, email, role } = req.user;

  const createFeedback = new FeedbackModel({
    customerName,
    feedback,
    user: {
      userId,
      email,
      role,
    },
  });

  try {
    await createFeedback.save();
    return res.status(200).send({ result: "Feedback created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ Error: error.message });
  }
};

const updateFeedback = async (req, res) => {
  const { feedbackId } = req.params;
  const { customerName, feedback } = req.body;

  try {
    let editFeedback;

    if (req.user.role === "Admin") {
      editFeedback = await FeedbackModel.findByIdAndUpdate(
        { _id: feedbackId },
        { customerName, feedback },
        { new: true } // Return the updated feedback
      );
    } else {
      editFeedback = await FeedbackModel.findOneAndUpdate(
        { _id: feedbackId, 'user.userId': req.user.userId },
        { customerName, feedback },
        { new: true } // Return the updated feedback
      );
    }

    if (editFeedback) {
      return res.status(200).send({
        result: "Feedback updated successfully.",
        feedback: editFeedback,
      });
    } else {
      return res
        .status(404)
        .send({ error: "Feedback not found or unauthorized." });
    }
  } catch (error) {
    return res.status(500).send({ Error: error.message });
  }
};
const deleteFeedback = async (req, res) => {
  const { feedbackId } = req.params;
  try {
    let deleteFeedback;
    console.log(feedbackId, req.user.userId)
    if (req.user.role === "Admin") {
      deleteFeedback = await FeedbackModel.findByIdAndDelete(
        { _id: feedbackId },
        { new: true } // Return the updated feedback
      );
    } else {
      deleteFeedback = await FeedbackModel.findOneAndDelete(
        { _id: feedbackId, 'user.userId': req.user.userId },
        { new: true } // Return the updated feedback
      );
    }

    if (deleteFeedback) {
      return res.status(200).send({
        result: "Feedback deleted successfully.",
        feedback: deleteFeedback,
      });
    } else {
      return res
        .status(404)
        .send({ error: "Feedback not found or unauthorized." });
    }
  } catch (error) {
    return res.status(500).send({ Error: error.message });
  }
};

module.exports = { getFeedback, postFeedback, updateFeedback, deleteFeedback };
