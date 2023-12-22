import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			maxLength: [50, "use shorter title"],
		},
		description: {
			type: String,
			required: true,
		},
		isCompleted: {
			type: Boolean,
			required: true,
		},
	},
	{ timestamps: true },
);

export default mongoose.model("tasks", taskSchema);
