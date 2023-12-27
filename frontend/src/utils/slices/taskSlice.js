import { createSlice } from "@reduxjs/toolkit";
import { addTaskAction, getTasksAction, toggleStatusAction } from "../action/taskAction";

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
				state.tasks[0].allTasks.push(action.payload);
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
				if (state.tasks.length === 0) {
					state.tasks.push(action.payload);
				} else {
					state.tasks.splice(1, state.tasks.length);
					state.tasks.push(action.payload);
				}
			})
			.addCase(getTasksAction.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message || "An error occurred";
			})
			.addCase(toggleStatusAction.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(toggleStatusAction.fulfilled, (state, action) => {
				state.status = "succeeded";

				const { _id, isCompleted } = action.payload;
				const taskIndex = state.tasks[0]?.allTasks.findIndex((task) => task._id === _id);

				if (taskIndex !== -1) {
					state.tasks[0].allTasks[taskIndex].isCompleted = isCompleted;
				}
			})
			.addCase(toggleStatusAction.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message || "An error occurred";
			});
	},
});

export default taskSlice.reducer;
