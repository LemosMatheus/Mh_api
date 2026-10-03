const { Router } = require("express");

const router = Router();

const MonsterController = require("./app/controllers/MonsterController");

router.get("monsters", MonsterController.index);

module.exports = router;