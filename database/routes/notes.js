const noteController = require("../controllers/notes");
const router = require("express").Router();

router.get("/", noteController.getAllNotes)
router.get("/:id", noteController.getNote);
router.put("/:id", noteController.updateNote);
router.post("/", noteController.createNote);

module.exports = router;