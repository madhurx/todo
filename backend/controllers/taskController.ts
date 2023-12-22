import { Request, Response } from "express";
import Tasks from "../models/taskModel";

export const addNewTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const taskData = req.body;

        if (!taskData.title || typeof taskData.title !== 'string') {
            res.status(400).send({ error: 'Invalid title' });
            return;
        }


        const task = new Tasks({
            title: taskData.title,
            description: taskData.description,
            isCompleted: taskData.isCompleted,
        });

        const newTask = await task.save();
        res.status(201).send(newTask);
    } catch (error) {
        console.error('Error adding a new task:', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
};

export const allTasks = async (req: Request, res: Response): Promise<void> => {
	try {
        console.log("try")

		const allTasks: any = await Tasks.find();
		res.status(200).json({ allTasks });
	} catch (error) {
        console.log("Er")

		throw error;
	}
};