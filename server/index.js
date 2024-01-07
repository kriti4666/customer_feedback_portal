require("dotenv").config();
const express = require('express');
const cors = require("cors");
const Connect = require('./src/Config/db');
const PORT = process.env.PORT;

const app = express();
const {userRoute} = require("./src/routes/user.routes")
const {feedbackRoute} = require("./src/routes/feedback.route");
const { Authenticate } = require("./src/middleware/authMiddleware");

app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use(cors());
app.get('/', (req, res) => res.send('hello'));


app.use("/user", userRoute);

app.use(Authenticate);
app.use("/feedback", feedbackRoute);


app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await Connect();
});
