import mongoose from "mongoose";
const { Schema } = mongoose;

const ToDo = new Schema({
    title: String,
    comment: String,
    createdAt: Date,
});

export default mongoose.model("ToDo", ToDo);