const express = require("express");

const viewsController = require("./../controller/viewsController");

const router = express.Router();

router.get("/", viewsController.getOverview);
router.get("/overview", viewsController.getOverview);
router.get("/donors", viewsController.getOverview);
router.get("/donate", viewsController.donate);
module.exports = router;
