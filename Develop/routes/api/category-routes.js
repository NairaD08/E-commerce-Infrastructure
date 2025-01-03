const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product],
  }).then((data) => {
    res.json(data);
  });
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const categoryId = parseInt(req.params.id, 10); // Convert to integer
  Category.findByPk(categoryId, {
    include: [Product],
  })
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "Category not found" });
      } else {
        res.json(data);
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// router.post("/", (req, res) => {
//   // create a new category
//   Category.create(req.body)
//     .then((data) => {
//       res.status(201).json(data);
//     })
//     .catch((error) => {
//       res.status(400).json({ error: error.message });
//     });
// });

router.post("/", (req, res) => {
  // Log the incoming request body for debugging
  console.log("Incoming request body:", req.body);

  // Validate that category_name is provided
  if (!req.body.category_name) {
    return res.status(400).json({ message: "category_name is required" });
  }

  // Create a new category
  Category.create({
    category_name: req.body.category_name, // Explicitly specify the field
  })
    .then((data) => {
      res.status(201).json(data); // Respond with the created category data
    })
    .catch((error) => {
      console.error("Error creating category:", error); // Log the error for debugging
      res.status(400).json({ error: error.message }); // Respond with the error message
    });
});
router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      if (!data[0]) {
        res.status(404).json({ message: "Category not found" });
      } else {
        res.json({ message: "Category updated successfully" });
      }
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "Category not found" });
      } else {
        res.json({ message: "Category deleted successfully" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
