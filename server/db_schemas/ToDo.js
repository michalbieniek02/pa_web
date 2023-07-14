import mongoose from "mongoose";
const { Schema } = mongoose;

const ToDo = new Schema({
    title: { type: String, required: true },
    comment: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("ToDo", ToDo);