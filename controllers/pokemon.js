const Pokemon = require("../models/pokemon");
const { Router } = require("express");
const router = Router();

//index route
router.get("/", async (req, res) => {
  res.json(await Pokemon.find({}));
});

//create route
router.post("/", async (req, res) => {
  res.json(await Pokemon.create(req.body));
});

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