import mongoose from "mongoose";

const EquipmentSchema = new mongoose.Schema({
  equipmentName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  images: {
    type: String,
    required: true,
  }
},
{ timestamps: true },
);

export default mongoose.model("Equipment", EquipmentSchema)