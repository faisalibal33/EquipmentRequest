import express from "express";
import { createEquipment, deleteEquipment, getAllEquipment, getEquipment, updateEquipment } from "../controllers/equipment.js";
const router = express.Router();

//CREATE
router.post("/", createEquipment);

//UPDATE
router.put("/:id", updateEquipment);
//DELETE
router.delete("/:id", deleteEquipment);
//GET

router.get("/find/:id", getEquipment);
//GET ALL

router.get("/", getAllEquipment);

export default router;
