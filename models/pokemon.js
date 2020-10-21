const { Schema, model } = require("mongoose");

//DOG SCHEMA
const pokeSchema = new Schema(
  {
    name: String,
    evolved: Boolean,
    img: String,
  },
  { timestamps: true }
);

//DOG MODEL
const Pokemon = model("poke", pokeSchema);

//EXPORT MODEL
module.exports = Pokemon;