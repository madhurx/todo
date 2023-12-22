import express from "express";
import { addNewTask, allTasks } from "../controllers/taskController";

const router: express.Router = express.Router();

router.post("/add", addNewTask);
router.get("/", allTasks);

export default router;
