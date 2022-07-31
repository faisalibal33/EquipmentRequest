import mongoose from "mongoose";
import Inc from "mongoose-sequence";
const AutoIncrement = Inc(mongoose);

const RequestSchema = new mongoose.Schema(
  {
    _id: Number,
    aircraftReg: {
      type: String,
      required: true,
    },
    requestBy: {
      type: String,
      required: true,
    },
    requestDate: {
      type: String,
    },
    closeBy: {
      type: String,
    },
    idNumber: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
    equipment: {
      type: String,
      required: true,
    },
    photos: {
      type: String,
    },
    remark: {
      type: String,
    },
    progress: {
      type: String,
      default: "OPEN",
    },
  },
  { timestamps: true },
  { _id: false }
);
RequestSchema.plugin(AutoIncrement);

export default mongoose.model("Request", RequestSchema);
