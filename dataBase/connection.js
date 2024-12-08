const mongoose = require("mongoose");

exports.connectMongoose = () => {
    mongoose.connect("mongodb://localhost:27017/habit");
    console.log('connect to Db')
};
