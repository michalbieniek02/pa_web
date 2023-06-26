import { Router } from "express";
import ToDo from "../db_schemas/ToDo.js";

const router = Router();

router.route("/todo")
    .get(async (req, res) => {
        const todos = await ToDo.find();
        res.json(todos);
    })
    .post(async (req, res) => {
        const { categoryID, title, comment } = req.body;
        const todo = new ToDo({
            categoryID,
            title,
            comment,
            createdAt: new Date(),
        });
        await todo.save();
        res.json(todo);
    });

export { router };