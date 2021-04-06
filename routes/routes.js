const express = require("express");
const router = express.Router();
const client = require("./client");

router.post("/token", client.postToken)
router.post("/client", client.post);
router.get("/clients", client.getAll);
router.get("/client/:id", client.getOne);
router.delete("/client/:id", client.delete);
router.put("/client/:id", client.put)

module.exports = router;