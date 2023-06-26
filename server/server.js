import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { router as apiRouter} from "./routers/api.js";

const { MONGO_URL, PORT } = process.env;
const corsPolicy = {
    origin: "http://localhost:3000",
    headers: "Content-Type, Authorization",
    methods: "GET, POST, PUT, DELETE",
}

if (!MONGO_URL) {
    throw new Error("Missing MongoURL in .env file");
}

const app = express();
app.use(cors(corsPolicy));
app.use(express.json());

app.use("/api", apiRouter);

app.get("/", (req, res) => {
    res.send("Hello World");
});



(async () => {
    await mongoose.connect(MONGO_URL);

    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
})();