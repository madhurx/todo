import { createSlice } from "@reduxjs/toolkit";
import { addTaskAction, getTasksAction } from "../action/taskAction";

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
			})
			.addCase(getTasksAction.pending, (state) => {
				state.status = "loading";
			})
			.addCase(getTasksAction.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.tasks.push(action.payload);
			})
			.addCase(getTasksAction.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message || "An error occurred";
			});
	},
});

export default taskSlice.reducer;
