import React from "react";

const TaskTable = () => {
	return (
		<div className="w-11/12 max-w-full">
			<table className="w-full text-start table-fixed ">
				<thead>
					<tr className="text-left">
						<th className=" w-40 px-3">Title</th>
						<th className=" w-3/5 px-3"> Description</th>
						<th className=" w-20 px-3">Status</th>
					</tr>
				</thead>
				<tbody>
					<tr className="">
						<td className="text-justify px-3 max-h-max start grid">
							sdsad aasdas asda fdgdffgsga
						</td>
						<td className="text-justify px-3">
							sd Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
							cupiditate temporibus labore commodi. Asperiores illo possimus soluta
							ullam mollitia ea delectus libero natus veritatis placeat.
						</td>
						<td className="text-justify px-3 grid">s</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default TaskTable;
