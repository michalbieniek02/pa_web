import { Router } from "express";
import ToDo from "../db_schemas/ToDo.js";

const router = Router();

router.route("/todo")
    .get(async (req, res) => {
        const todos = await ToDo.find();
        res.status(200).send(todos);
    })
    .post(async (req, res) => {
        try {
            const { title, comment } = req.body;
            const todo = new ToDo({
                title,
                comment,
            });
            await todo.save();
            res.status(200).send(todo);
        } catch (error) {
            console.error(error);
            res.status(500).send(error.message);
        }
    });

export { router };