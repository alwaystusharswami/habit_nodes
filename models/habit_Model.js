const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const habitSchema = new Schema(
  {
    content: { type: String, required: true },

    dates: [
      {
        date: String,
        complete: String,
      },
    ],
  },
  { timestamps: true }
);
const Habit = mongoose.model("Habit", habitSchema);
module.exports = Habit;
