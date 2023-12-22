import { createSlice } from "@reduxjs/toolkit";
import { addTaskAction } from "../action/taskAction";

const initialState = {
	tasks: [],
	error: null,
	status: "idle",
};

const taskSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(addTaskAction.pending, (state) => {
				state.status = "loading";
			})
			.addCase(addTaskAction.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.tasks.push(action.payload);
			})
			.addCase(addTaskAction.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message || "An error occurred";
			});
	},
});

export const selectTasks = (state) => state.tasks.tasks;
export const selectError = (state) => state.tasks.error;
export const selectStatus = (state) => state.tasks.status;

export default taskSlice.reducer;
