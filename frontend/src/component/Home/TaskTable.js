import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasksAction, toggleStatusAction } from "../../utils/action/taskAction";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";

const TaskTable = () => {
	const dispatch = useDispatch();
	const tableData = useSelector((state) => state.task?.tasks[0]?.allTasks);

	useEffect(() => {
		dispatch(getTasksAction());
	}, [dispatch, tableData]);

	const toggleCheck = (id, isCompleted) => {
		const payload = { id, isCompleted: !isCompleted };
		dispatch(toggleStatusAction(payload));
	};

	return (
		<div className="w-11/12 max-w-full">
			<table className="w-full text-start table-fixed ">
				<thead>
					<tr className="text-left">
						<th className=" w-40 px-3">Title</th>
						<th className=" w-3/5 px-3"> Description</th>
						<th className=" w-20 px-3">Completed</th>
					</tr>
				</thead>
				<tbody>
					{tableData?.map((item) => {
						return (
							<tr key={item._id} className="">
								<td className="text-justify px-3 max-h-max start grid">
									{item.title}
								</td>
								<td className="text-justify px-3">{item.description}</td>
								<td className="text-justify px-3 grid">
									<button onClick={() => toggleCheck(item._id, item.isCompleted)}>
										{item.isCompleted ? <CheckSharpIcon /> : <CloseSharpIcon />}{" "}
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default TaskTable;
