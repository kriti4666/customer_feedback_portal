const mongoose = require("mongoose");

const Connect = () => {

    try {
        const connectDb = mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
        console.log("Database connected successfull");

        return connectDb;
    } catch (error) {
        console.log("Error while connecting with Database...!");

    }


}

module.exports = Connect;