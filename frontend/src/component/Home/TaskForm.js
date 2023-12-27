import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskAction } from "../../utils/action/taskAction";

const TaskForm = () => {
	// const [title, setTitle] = useState();
	// const [description, setDescription] = useState();
	// const [done, setDone] = useState();

	const [formData, setFormData] = useState({
		title: "",
		description: "",
		isCompleted: false,
	});

	const dispatch = useDispatch();

	const handleChange = (event) => {
		const { name, value, type } = event.target;

		setFormData((prevFormData) => {
			if (type === "checkbox") {
				return {
					...prevFormData,
					[name]: event.target["checked"],
				};
			} else {

				return {
					...prevFormData,
					[name]: value,
				};
			}
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await dispatch(addTaskAction(formData));
		setFormData({
			title: "",
			description: "",
			isCompleted: false,
		});
	};

	return (
		<div className="justify-self-center w-2/3 ">
			<form className="w-full max-w-sm" onSubmit={handleSubmit}>
				<div className="border-b border-teal-500 py-2">
					<input
						className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
						type="text"
						placeholder="Title"
						name="title"
						value={formData.title}
						onChange={handleChange}
					/>
				</div>
				<div className="border-b border-teal-500 py-2">
					<textarea
						className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
						placeholder="Description"
						maxLength={100}
						name="description"
						value={formData.description}
						onChange={handleChange}
						rows={3}></textarea>
				</div>
				<div className=" mt-3 mb-6">
					<label className="md:w-2/3 block text-gray-500 font-bold">
						<input
							className="mr-2 leading-tight"
							type="checkbox"
							name="isCompleted"
							checked={formData.isCompleted}
							onChange={handleChange}
						/>
						<span className="text-sm">Task completed</span>
					</label>
				</div>
				<button
					className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
					type="submit">
					Add Task
				</button>
			</form>
		</div>
	);
};

export default TaskForm;
