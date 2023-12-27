import express from "express";
import { addNewTask, allTasks, toggleStatus } from "../controllers/taskController";

const router: express.Router = express.Router();

router.post("/add", addNewTask);
router.get("/", allTasks);
router.post("/toggleStatus", toggleStatus);

export default router;
