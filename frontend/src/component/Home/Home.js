import React from "react";
import TaskForm from "./TaskForm";
import TaskTable from "./TaskTable";

const Home = () => {
	return (
		<div className=" px-1 my-4 grid grid-cols-2 gap-4">
			<TaskForm />
			<TaskTable />
		</div>
	);
};

export default Home;
