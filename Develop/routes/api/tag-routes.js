const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  Tag.findAll({
    include: [{ model: Product }],
  })
    .then((tags) => res.json(tags))
    .catch((err) => res.status(500).json(err));
});
// find all tags
// be sure to include its associated Product data

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data

  Tag.findOne({
    where: { id: req.params.id },
    include: [{ model: Product }],
  })
    .then((tag) => {
      if (!tag) {
        return res.status(404).json({ message: "Tag not found" });
      }
      res.json(tag);
    })
    .catch((err) => res.status(500).json(err));
});

router.post("/", (req, res) => {
  Tag.create(req.body)
    .then((tag) => res.status(201).json(tag))
    .catch((err) => res.status(400).json(err));
});
// create a new tag

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value

  Tag.update(req.body, {
    where: { id: req.params.id },
  })
    .then((updated) => {
      if (!updated[0]) {
        return res.status(404).json({ message: "Tag not found" });
      }
      res.json({ message: "Tag updated" });
    })
    .catch((err) => res.status(400).json(err));
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value

  Tag.destroy({
    where: { id: req.params.id },
  })
    .then((deleted) => {
      if (!deleted) {
        return res.status(404).json({ message: "Tag not found" });
      }
      res.json({ message: "Tag deleted" });
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
