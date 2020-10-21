const Pokemon = require("../models/pokemon");
const Poketrainer = require("../models/poketrainer");
const { Router } = require("express");
const { findById } = require("../models/pokemon")
const router = Router();
const mongoose = require("mongoose")
const toId = mongoose.Types.ObjectId

//index route
//get pokemon
router.get("/", async (req, res) => {
  res.json(await Pokemon.find({}));
});

//get poketrainer
// router.get("/poketrainer", async (req, res) => {
//   res.json(await Poketrainer.find({}))
// })

//create pokemon route
router.post("/", async (req, res) => {
  res.json(await Pokemon.create(req.body));
});

//create poketrainer route
// router.post("/poketrainer/:pokemonid", async (req, res) => {
//   //   req.body.blog = toId(req.params.trainerid)
//     const poketrainer = await Poketrainer.create(req.body);
//     const pokemon = await Pokemon.findById(req.params.pokemonid);
//     poketrainer.pokemon = pokemon._id
//     poketrainer.save()
//     pokemon.poketrainer.push(poketrainer._id);
//     pokemon.save();
//     res.json(poketrainer);
//   });

//update route
router.put("/:id", async (req, res) => {
  res.json(await Pokemon.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

//delete route
router.delete("/:id", async (req, res) => {
  res.json(await Pokemon.findByIdAndRemove(req.params.id));
});

// EXPORT ROUTER
module.exports = router;