import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addTaskAction = createAsyncThunk("addTask", async (payload) => {
	try {
		const response = await axios.post("http://localhost:5000/api/add", payload);
		return response.data;
	} catch (error) {
		console.error("An error occurred while adding a task:", error);
		throw error;
	}
});

export const getTasksAction = createAsyncThunk("getTasks", async () => {
	try {
		const response = await axios.get("http://localhost:5000/api/");
		return response.data;
	} catch (error) {
		console.error("An error occurred while adding a task:", error);
		throw error;
	}
});

export const toggleStatusAction = createAsyncThunk("toggleStatus", async (payload) => {
	try {
		const response = await axios.post("http://localhost:5000/api/toggleStatus", payload);
		return response.data;
	} catch (error) {
		console.error("An error occurred while adding a task:", error);
		throw error;
	}
});
