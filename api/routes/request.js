import express from "express";
import {
  createRequest,
  deleteRequest,
  getAllRequest,
  getRequest,
  updateRequest,
} from "../controllers/request.js";
const router = express.Router();

//CREATE
router.post("/", createRequest);

//UPDATE
router.put("/:id", updateRequest);
//DELETE
router.delete("/:id", deleteRequest);
//GET

router.get("/find/:id", getRequest);
//GET ALL

router.get("/", getAllRequest);

// router.get("/all", getAllRequestbyDate);

export default router;
