const express = require("express");

const CatalogService = require("../lib/CatalogService");

const router = express.Router();

router.get("/items", async (req, res) => {
  try {
    const items = await CatalogService.getAll();
    return res.json(items);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/items/:id", async (req, res) => {
  try {
    const item = await CatalogService.getOne(req.params.id);
    return res.json(item);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/items", async (req, res) => {
  try {
    const newItem = await CatalogService.create(req.body);
    return res.json(newItem);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router;
