const { Schema, model } = require("mongoose");
const mongoose = require("../DB/conn");

//DOG SCHEMA
const pokeSchema = new Schema(
  {
    // poketrainer: [{ref: "owner", type: mongoose.Types.ObjectId}],
    name: String,
    evolved: Boolean,
    img: String,
    owner: String
  },
  { timestamps: true }
);

//DOG MODEL
const Pokemon = model("poke", pokeSchema);

//EXPORT MODEL
module.exports = Pokemon;