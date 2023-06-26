import mongoose from "mongoose";
const { Schema } = mongoose;

const ToDo = new Schema({
    categoryID: String,
    title: String,
    comment: String,
    createdAt: Date,
});

export default mongoose.model("ToDo", ToDo);