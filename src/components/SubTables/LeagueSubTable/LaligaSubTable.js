import { columnSelected } from "@syncfusion/ej2-react-grids";
import React, { useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useRowSelect, useTable } from "react-table";
import { Context } from "../../../context/Context";

function LaligaSubTable(props) {
	const { betHandler } = useContext(Context);
	const [dic, setDic] = useState([{ book: "book" }]);
	const [blue, setBlue] = useState();
	const [bet, setBet] = useState([
		{ name: "sam", age: 40 },
		{ name: "bob", age: 20 },
	]);
	const handleclick = () => {};
	const beet = props.livetable;
	const COLUMN = [
		{
			Header: "LaLiga",
			accessor: "laliga",
		},
		{
			Header: "1",
			accessor: "rate1",
		},
		{
			Header: "x",
			accessor: "rate2",
		},
		{
			Header: "2",
			accessor: "rate3",
		},
		{
			Header: "1x",
			accessor: "rate4",
		},
		{
			Header: "12",
			accessor: "rate5",
		},
		{
			Header: "2x",
			accessor: "rate6",
		},
		{
			Header: "1",
			accessor: "rate7",
		},
	];
	const columns = useMemo(() => COLUMN, []);
	const data = useMemo(() => props.laligaTableaus, []);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		selectedFlatRows,
		state: { selectedRowIds },
	} = useTable(
		{
			columns,
			data,
		},
		useRowSelect
	);

	return (
		<div className='w-full'>
			<div className='w-full bg-slate-500 '>
				<div class='w-full  relative shadow-md  '>
					<table
						{...getTableProps()}
						class=' w-full text-sm text-left text-gray-800'
					>
						{props.laligaTableaus.length !== 0 && (
							<thead class='w-full text-start   text-xs text-gray-500 uppercase   '>
								{headerGroups.map((headerGroup) => (
									<tr
										{...headerGroup.getHeaderGroupProps()}
										className='w-full bg-[#EEF4F8]  '
									>
										{headerGroup.headers.map((column) => (
											<th
												{...column.getHeaderProps()}
												scope='col '
												class='text-start w-1/12   py-2   '
											>
												<div className=' w-full break-all text-center  '>
													{column.render("Header")}
												</div>
											</th>
										))}
									</tr>
								))}
							</thead>
						)}
						<tbody {...getTableBodyProps()}>
							{rows.map((row) => {
								prepareRow(row);
								return (
									<tr
										{...row.getRowProps()}
										class=' border-b  border-gray-700 bg-[#FFFFFF] text-black   font-semibold '
										// onClick={() => {
										// 	console.log(row);
										// }}
									>
										{row.cells.map((cell) => {
											return (
												<td
													{...cell.getCellProps()}
													onClick={
														// console.log(row.cells.indexOf(cell))
														row.cells.indexOf(cell) == 0
															? null
															: () =>
																	betHandler(
																		cell.value,
																		row.cells.at(0).value,
																		row.id
																	)
													}
													class={` border border-gray-200 text-sm !w-1/12 hover:bg-sky-200 cursor-pointer py-2 ${
														cell.value == blue && row.id ? null : null
													}`}
												>
													<div
														className={`!w-full h-full text-xs whitespace-normal ${
															row.cells.indexOf(cell) == 0
																? "font-light"
																: " text-center font-normal  "
														}`}
													>
														{cell.render("Cell")}
													</div>
												</td>
											);
										})}
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default LaligaSubTable;
