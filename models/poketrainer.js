const { Schema, model } = require("mongoose");
const mongoose = require("../DB/conn");

//DOG SCHEMA
const trainerSchema = new Schema(
  {
    name: String,
    // pokemon: {ref: "Pokemon", type: mongoose.Types.ObjectId}
  },
  { timestamps: true }
);

//DOG MODEL
const Poketrainer = model("trainer", trainerSchema);

//EXPORT MODEL
module.exports = Poketrainer;